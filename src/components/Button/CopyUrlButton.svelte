<script lang="ts">
  export let link: string;
  export let onAfterClick: () => void;
  export let isCopied;
  
  const handleClickButton = () => {
    if(navigator.clipboard){
      navigator.clipboard.writeText(link);
      isCopied = true;
    }
    else {
      (document.getElementById("link_container") as HTMLTextAreaElement)?.select();
      document.execCommand("copy");
      isCopied = true;
    }
    onAfterClick();
  }
</script>

<div id="sns_button_container" on:click={handleClickButton}>
  링크 공유
</div>
<textarea bind:value={link} id="link_container" />

<style>
  #sns_button_container {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #0acf83;
    font-size: 20px;
    width: 68px;
    height: 68px;
    border-radius: 8px;
    cursor: pointer;
  }
  textarea {
    width: 0px;
    height: 0px;
    visibility: hidden;
  }
</style>
