<script lang="ts">
  export let className: string = '';
</script>

<section class={className}>
  <div class="gradient" />
  <slot />
</section>

<style>
  section {
    position: relative;
  }

  div.gradient {
    position: absolute;
    /* background: linear-gradient(0deg, rgba(65, 75, 75, 0.7105217086834734) 0%, rgba(241, 236, 236, 0) 18%); */
    width: 100%;
    height: 100%;
  }
  section {
    background-size: cover;
    width: 100%;
    height: 100%;
  }
</style>
