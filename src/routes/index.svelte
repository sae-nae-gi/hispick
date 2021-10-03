<script context="module">
  import { cardsStore } from "../store/card.store";
  export async function preload() {
    try {
      const res = await this.fetch("api/card.json");
      if (res.ok) {
        const cards = await res.json();
        cardsStore.update(() => cards);

        return { cards };
      } else {
        const message = await res.text();
        this.error(res.statusCode, message);
      }
    } catch (e) {
      this.error(500, e);
    }
    return { cards: { contents: [], isEmpty: true } };
  }
</script>

<script lang="ts">
  import { onMount } from "svelte";
  import { goto } from "@sapper/app";
  import PrimaryButton from "../components/Button/PrimaryButton.svelte";
  import BackgroundFrame from "../components/Frame/BackgroundFrame.svelte";
  import WideCard from "../components/Card/WideCard.svelte";
  import MainHeader from "../components/Header/MainHeader.svelte";
  import { getRandomCard } from "../utils/pickCards";
  import introduceIllustration from "../../static/introduce_illustration.png";
  import land_background_under from "../../static/lands.png";
  import { cardStore } from "../store/card.store";
  import type { Cards } from "../store/card.store";

  export let cards: Cards;
  const handleClick = () => {
    cardStore.update(() => {
      const index = Math.trunc(Math.random() * cards.contents.length);
      return { ...cards.contents[index], isEmpty: false };
    });
    goto("/card");
  };

  const pickedCards = getRandomCard(4);

  let datas: Array<{
    title: string;
    content: string;
    imageUrl?: string;
  }> = [
    {
      title: "요한복음 14 : 27",
      content: "평안을 너희에게 끼치노니\n곧 나의 평안을 너희에게 주노라",
    },
    {
      title: "시편 23 : 1",
      content: "여호와는 나의 목자시니\n내게 부족함이 없으리로다",
    },
    {
      title: "아가 2 : 10",
      content: "나의 사랑, 내 어여쁜 자야\n일어나서 함께 가자",
    },
    {
      title: "빌립보서 2 : 5",
      content: "너희 안에 이 마음을 품어라\n곧 그리스도의 마음이니",
    },
  ];

  let sliderContainer: any;
  let hasAnimationStyle = false;
  let refinedDatas = cards.contents.map((data, index) => {
    data.imageUrl = pickedCards[index];
    return data;
  });
  $: sliderAnimationClass = hasAnimationStyle ? "slide_in" : "";

  onMount(() => {
    hasAnimationStyle = true;
  });
</script>

<BackgroundFrame>
  <MainHeader title={"2022"} description={["내게 보내주신", "하나님의 말씀"]} />
  <section class="introduce_illustration_cover">
    <article>
      <div class="introduce_illustration_image" style="background-image: url({introduceIllustration});" />
    </article>
  </section>
  <article class="wide_slider_container">
    <ul
      class="wide_slider {sliderAnimationClass}"
      bind:this={sliderContainer}
      style="animation-duration: {refinedDatas.length * 2 * 10}s"
    >
      {#each refinedDatas as data (data.title)}
        <li>
          <WideCard title={data.title} content={data.text} imageUrl={data.imageUrl} className="wide_card" />
        </li>
      {/each}
      {#each refinedDatas as data (data.title)}
        <li>
          <WideCard title={data.title} content={data.text} className="wide_card" imageUrl={data.imageUrl} />
        </li>
      {/each}
    </ul>
  </article>
  <article class="background_under_cover">
    <div class="background_under" style="background: url({land_background_under}) center/cover no-repeat;" />
  </article>
  <article class="button_section">
    <PrimaryButton class="primary_button" label={"말씀 확인하기"} {handleClick} />
  </article>
</BackgroundFrame>

<style lang="scss">
  .background_under_cover {
    position: absolute;
    bottom: 0;
    z-index: 0;
  }

  .background_under {
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    max-width: 450px;
    height: 300px;
  }

  @keyframes slideIn {
    0% {
      transform: translateX(0);
    }

    100% {
      transform: translateX(-50%);
    }
  }

  div.introduce_illustration_image {
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    padding-top: 100%;
    margin: 0 auto;
  }
  article.wide_slider_container {
    position: relative;
    z-index: 2;
    overflow: hidden;
  }

  article.wide_slider_container li {
    display: inline-block;
    width: 280px;

    &:not(:last-of-type) {
      margin-right: 24px;
    }
  }

  .slide_in {
    animation: slideIn;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }
  article .wide_slider {
    display: inline-block;
    white-space: nowrap;
  }

  article.button_section {
    position: fixed;
    bottom: 8px;
    width: 100%;
    z-index: 3;
    max-width: 450px;
    padding: 8px 16px;
  }
  :global(button.primary_button) {
    color: white;
    background-color: #ffbcac;
    font-size: 18px;
    font-weight: 700;
  }
</style>
