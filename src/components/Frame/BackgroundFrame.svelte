<script lang="ts">
  // let imageBackgrounds = [
  //   'sky.jpeg',
  //   'sky2.jpeg',
  //   'sky3.jpeg',
  //   'sky4.jpeg',
  //   'sky5.jpeg',
  //   'sky6.jpeg',
  //   'sky7.jpeg',
  // ];

  // const getRandomImage = () => {
  //   return imageBackgrounds[Math.trunc(Math.random() * imageBackgrounds.length)];
  // }; getRandomImage()
</script>

<section>
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
