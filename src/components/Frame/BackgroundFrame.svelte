<script lang="ts">
  export let className: string = '';
</script>

<section class={className}>
  <slot />
</section>

<style>
  section {
    position: relative;
  }

  section {
    background-size: cover;
    width: 100%;
    height: 100%;
  }
</style>
