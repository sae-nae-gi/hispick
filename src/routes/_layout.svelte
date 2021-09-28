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

<script>
  import Nav from "../components/Nav.svelte";
  import { setContext } from "svelte";
  export let cards;
  export let segment;

  setContext("cards", cards);
</script>

<main>
  <Nav {segment} />
  <slot />
</main>

<style>
  main {
    position: relative;
    height: 100%;
    max-width: 450px;
    margin: 0 auto;
  }
</style>
