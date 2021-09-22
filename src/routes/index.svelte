<script lang="ts">
  import { onMount } from 'svelte';
  import { goto } from '@sapper/app';
  import PrimaryButton from '../components/Button/PrimaryButton.svelte';
  import BackgroundFrame from '../components/Frame/BackgroundFrame.svelte';
  import WideCard from '../components/Card/WideCard.svelte';

  const handleClick = () => {
    goto('/card');
  };

  let datas = [
    {
      title: '요한복음 14 : 27',
      content: '평안을 너희에게 끼치노니\n곧 나의 평안을 너희에게 주노라',
    },
    {
      title: '시편 23 : 1',
      content: '여호와는 나의 목자시니\n내게 부족함이 없으리로다',
    },
    {
      title: '아가 2 : 10',
      content: '나의 사랑, 내 어여쁜 자야\n일어나서 함께 가자',
    },
    {
      title: '빌립보서 2 : 5',
      content: '너희 안에 이 마음을 품어라\n곧 그리스도의 마음이니',
    },
  ];
  let speed = 4000;
  let sliderContainer: any;
  let hasAnimationStyle = false;
  const sliderWidth = 345;

  $: sliderAnimationClass = hasAnimationStyle ? 'slide_in' : '';
  // onMount(() => {
  //   hasAnimationStyle = true;
  //   let slideIndex = 0;
  //   let toGo = 345;
  //   const interval = setInterval(() => {
  //     const clonedChildNode = sliderContainer.childNodes[slideIndex].cloneNode(true);
  //     slideIndex++;
  //     sliderContainer.appendChild(clonedChildNode);
  //     toGo += sliderWidth;
  //     sliderContainer.style.transform = `translateX(-${toGo}px)`;
  //   }, speed);

  //   return () => {
  //     clearInterval(interval);
  //   };
  // });

  onMount(() => {
    hasAnimationStyle = true;
  });
</script>

<svelte:head>
  <title>2022 송구영신예배 말씀 뽑기</title>
</svelte:head>
<BackgroundFrame>
  <article class="wide_slider_container">
    <ul
      class="wide_slider {sliderAnimationClass}"
      bind:this={sliderContainer}
      style="animation-duration: {datas.length * 2 * 10}s"
    >
      {#each datas as data (data.title)}
        <li>
          <WideCard title={data.title} content={data.content} className="wide_card" />
        </li>
      {/each}
      {#each datas as data (data.title)}
        <li>
          <WideCard title={data.title} content={data.content} className="wide_card" />
        </li>
      {/each}
    </ul>
  </article>
  <article class="button_section">
    <PrimaryButton class="primary_button" label={'말씀 확인하기'} {handleClick} />
  </article>
</BackgroundFrame>

<style>
  @keyframes slideIn {
    0% {
      transform: translateX(0);
      /* animation-timing-function: cubic-bezier(0.78, 0.34, 0.15, 0.25); */
    }

    0.5% {
    }

    100% {
      transform: translateX(-50%);
    }
  }

  article.wide_slider_container {
    overflow: hidden;
    padding: 0 32px;
  }

  article.wide_slider_container li {
    display: inline-block;
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
