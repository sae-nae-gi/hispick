<script lang="ts">
  import { goto } from '@sapper/app';
  import PrimaryButton from '../components/Button/PrimaryButton.svelte';
  import BackgroundFrame from '../components/Frame/BackgroundFrame.svelte';
  const handleClick = () => {
    goto('/card');
  };
</script>

<svelte:head>
  <title>2022 송구영신예배 말씀 뽑기</title>
</svelte:head>
<BackgroundFrame>
  <article class="button_section">
    <PrimaryButton class="primary_button" label={'말씀 확인하기'} {handleClick} />
  </article>
</BackgroundFrame>

<style>
  article.button_section {
    position: fixed;
    bottom: 8px;
    width: 100%;
    max-width: 450px;
    padding: 8px 16px;
  }
  :global(button.primary_button) {
    color: white;
    background-color: #ffbcac;
    font-size: 18px;
    font-weight: 700;
  }
</style>
