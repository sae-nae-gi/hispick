<script context="module" lang="ts">
  export interface PrimaryButtonProps extends HTMLButtonElement {
    handleClick: () => void;
    label: string;
  }
</script>

<script lang="ts">
  export let handleClick: PrimaryButtonProps['handleClick'];
  export let label: PrimaryButtonProps['label'];
</script>

<button on:click={handleClick}>{label}</button>

<style>
  button {
    width: 100%;
    text-align: center;
    border-radius: 4px;
    padding: 10px 0;
    margin: 0 auto;
    cursor: pointer;
  }
</style>
