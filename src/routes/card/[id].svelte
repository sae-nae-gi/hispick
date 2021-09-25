<script context="module">
  export async function preload(page, session) {
    try {
      const { params } = page;

      const res = await this.fetch(`api/card/${params.id}.json`);
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
  }
</script>

<script>
  import { tree_pink } from '../../utils/pickCards';
  import WideCard from '../../components/Card/WideCard.svelte';
  import BackgroundFrame from '../../components/Frame/BackgroundFrame.svelte';

  export let card;
</script>

<section class="frame_wrapper">
  <BackgroundFrame className="override_background_frame">
    {#if card}
      <div class="card_wrapper">
        <WideCard title={card.title} content={card.text} imageUrl={tree_pink} />
      </div>
    {:else}
      <div>해당 카드가 없습니다.</div>
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
    margin: 10px;
    @media (max-width: 295px) {
      margin: 10px 0;
    }
  }

  .card_wrapper {
    animation: fadein 3s;
    width: 271px;
    margin: 0 auto;
  }
</style>
