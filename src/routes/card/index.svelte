<script>
  import { tree_pink } from "../../utils/pickCards";
  import WideCard from "../../components/Card/WideCard.svelte";
  import BackgroundFrame from "../../components/Frame/BackgroundFrame.svelte";
  import no_resource from "../../../static/no_resource.png";
  import { getContext } from "svelte";
  import { stores } from "@sapper/app";
  import { cardStore } from "../../store/card.store";
  import { cards as cardImages } from "../../utils/pickCards";

  const cardImage = cardImages[Math.trunc(Math.random() * cardImages.length)];
  const cardsContext = getContext("cards");
  const { page } = stores();
  let card;
  if ($page.query.id) {
    const foundCard = (cardsContext.contents || []).find((item) => item.showId === $page.query.id);
    if (foundCard) {
      card = { ...foundCard, isEmpty: false };
    } else {
      card = { isEmpty: true };
    }
  } else {
    if (Object.entries($cardStore).length) {
      card = $cardStore;
    } else {
      card = { isEmpty: true };
    }
  }
</script>

<section class="frame_wrapper">
  <BackgroundFrame className="override_background_frame">
    {#if !card.isEmpty}
      <div class="card_wrapper">
        <WideCard title={card.title} content={card.text} imageUrl={cardImage} />
      </div>
    {:else}
      <div class="no_resource" style="background: url({no_resource}) center/cover no-repeat;" />
      <div class="empty_description">메세지 함이 비어있네요!</div>
      <div class="empty_description">
        새로운 <a href="." rel="prefetch">말씀</a>을 요청해보세요
      </div>
    {/if}
  </BackgroundFrame>
</section>

<style lang="scss">
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .override_background_frame {
    margin: 0;
  }

  .frame_wrapper {
    position: relative;
    padding: 20px 0;
    margin: 10px;
    @media (max-width: 295px) {
      margin: 10px 0;
    }
  }

  .no_resource {
    width: 100%;
    max-width: 450px;
    padding-top: 100%;
  }

  .empty_description {
    text-align: center;
    font-size: 28px;
    font-family: SangSangFlowerRoad, Noto Sans KR, Roboto;

    > a {
      font-family: SangSangFlowerRoad, Noto Sans KR, Roboto;
      font-weight: 700;
    }
  }

  .card_wrapper {
    animation: fadein 3s;
    width: 280px;
    margin: 0 auto;
  }
</style>
