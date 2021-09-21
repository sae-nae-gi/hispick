<script>
  import Nav from '../components/Nav.svelte';

  export let segment;
</script>

<main>
  <Nav {segment} />
  <slot />
</main>

<style>
  main {
    position: relative;
    max-width: 450px;
    margin: 0 auto;
  }
</style>
