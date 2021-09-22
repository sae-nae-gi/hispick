<script lang="ts">
  import { goto } from '@sapper/app';
  import PrimaryButton from '../components/Button/PrimaryButton.svelte';

  const handleClick = () => {
    goto('/card');
  };
</script>

<svelte:head>
  <title>2022 송구영신예배 말씀 뽑기</title>
</svelte:head>
<PrimaryButton class="primary-button" label={'말씀 확인하기'} {handleClick} />

<style>
  :global(button.primary-button) {
    color: white;
    background-color: #ffbcac;
  }
</style>
