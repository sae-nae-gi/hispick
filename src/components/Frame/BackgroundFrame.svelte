<script lang="ts">
  let imageBackgrounds = ['sky.jpeg', 'sky2.jpeg'];

  const getRandomImage = () => {
    return imageBackgrounds[Math.trunc(Math.random() * imageBackgrounds.length)];
  };
</script>

<section style="background: url({getRandomImage()}) center no-repeat;">
  <slot />
</section>

<style>
  section {
    background-size: cover;
    width: 100%;
    height: 100%;
  }
</style>
