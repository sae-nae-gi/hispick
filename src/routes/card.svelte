<script context="module">
  export async function preload() {
    try {
      const res = await this.fetch('api/card.json');
      if (res.ok) {
        const cards = await res.json();
        console.log({ cards });
        return { cards };
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
  import { onMount } from 'svelte';
  export let cards;
  onMount(() => {
    console.log({ cards });
  });
</script>

<section>card page</section>
