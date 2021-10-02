<script>
  import { getContext } from 'svelte';

  const cardsContext = getContext('cards');
</script>

<div class="hidden">
  {#each cardsContext.contents as card}
    <a href="/card?id={card.showId}">{card.showId}</a>
  {/each}
  <a href="/sitemap.xml">sitemap</a>
</div>

<style>
  .hidden {
    position: absolute;
    top: -5000px;
    visibility: hidden;
  }
</style>
