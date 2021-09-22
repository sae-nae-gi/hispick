<script context="module" lang="ts">
  export interface PrimaryButtonProps extends HTMLButtonElement {
    handleClick: () => void;
    label: string;
    class?: string;
  }
</script>

<script lang="ts">
  export let handleClick: PrimaryButtonProps['handleClick'];
  export let label: PrimaryButtonProps['label'];
  let className: string;
  export { className as class };
</script>

<button on:click={handleClick} class={className}>{label}</button>

<style>
  button {
    width: 100%;
    text-align: center;
    border-radius: 4px;
    padding: 10px 0;
    border: none;
    margin: 0 auto;
    cursor: pointer;
  }
</style>
