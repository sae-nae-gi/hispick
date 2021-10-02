<script>
  export let title;
  export let message;
</script>

<div class="toast_container">
  <div class="title">{title}</div>
  <div class="description">{message}</div>
</div>

<style type="scss">
  @keyframes flowIn {
    0% {
      bottom: 0;
    }
    
    100% {
      bottom: 50%;
    }
  }

  .toast_container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    z-index: 9;
    background-color: #fad891;
    text-align:center;
    bottom: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 200px;
    height: 120px;
    border-radius: 24px;
    animation: flowIn 300ms ease;
  }

  .title {
    font-size: 20px;
    font-weight: 700;
  }
  
  .description {
    font-size: 20px;
    margin-top: 16px;
  }
</style>

