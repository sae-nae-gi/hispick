<script lang="ts">
  export let title: string;
  export let description: string[];
</script>

<header>
  <div class="container">
    <h1 class="title">{title}</h1>
    {#each description as content}
      <div>{content}</div>
    {/each}
  </div>
</header>

<style lang="scss">
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .container {
    margin: 10px 0;
  }
  .container * {
    font-family: SangSangFlowerRoad, Noto Sans KR, Roboto;
    text-align: center;

    & + div {
      &:first-of-type {
        animation: fadein 3s;
      }
      &:last-of-type {
        animation: fadein 10s;
      }
      font-size: 30px;
    }
  }

  .title {
    font-size: 45px;
    font-weight: 700;
  }
</style>
