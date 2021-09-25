<script context="module">
  export async function preload(page) {
    try {
      const { query } = page;
      const res = await this.fetch('api/card.json?' + new URLSearchParams(query));
      if (res.ok) {
        const card = await res.json();
        console.log({ card });
        return { card };
      } else {
        const message = await res.text();
        this.error(res.statusCode, message);
      }
    } catch (e) {
      this.error(500, e);
    }
    return { card: null };
  }
</script>

<script>
  import { tree_pink } from '../../utils/pickCards';
  import WideCard from '../../components/Card/WideCard.svelte';
  import BackgroundFrame from '../../components/Frame/BackgroundFrame.svelte';
  import no_resource from '../../../static/no_resource.png';

  export let card;
  let onAfterClicked = false;
</script>

<section class="frame_wrapper">
  <BackgroundFrame className="override_background_frame">
    {#if !card.isEmpty}
      <div class="card_wrapper">
        <WideCard title={card.title} content={card.text} imageUrl={tree_pink} />
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
    width: 271px;
    margin: 0 auto;
  }
</style>
