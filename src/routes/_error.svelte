<script>
  import not_found from '../../static/not_found404.png';
  export let status;
  export let error;

  const dev = process.env.NODE_ENV === 'development';
</script>

<svelte:head>
  <title>말씀뽑기 {status}</title>
</svelte:head>
{#if status === 404}
  <p class="not_found" style="background: url({not_found}) center/cover no-repeat">{error.message}</p>
  <div class="eden_statement">
    <div>저런, 에덴동산을 벗어났어요!</div>
    <div><a href="."> 여기</a>를 눌러보세요!</div>
  </div>
{/if}

{#if dev && error.stack}
  <pre>{error.stack}</pre>
{/if}

<style>
  * {
    font-family: SangSangFlowerRoad, Noto Sans KR, Roboto;
  }
  .not_found {
    max-width: 450px;
    padding-top: 100%;
  }
  .eden_statement {
    font-size: 20px;
    text-align: center;
  }
  h1,
  p {
    margin: 0 auto;
  }

  h1 {
    font-size: 2.8em;
    font-weight: 700;
    margin: 0 0 0.5em 0;
  }

  p {
    margin: 1em auto;
  }

  @media (min-width: 480px) {
    h1 {
      font-size: 4em;
    }
  }
</style>
