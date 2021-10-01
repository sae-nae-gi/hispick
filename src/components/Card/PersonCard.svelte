<script>
  export let name;
  export let imageUrl;
  export let description;
  export let className;
  export let onClick;
</script>

<div class="team_introduce_container {className}" on:click={onClick}>
  <div class="team_introduce_teammate_box">
    <div 
      class="team_introduce_teammate_image"
      style="background: url({imageUrl}) center/cover no-repeat;"
    />
    <div class=team_introduce_text_container>
      <div class="team_introduce_teammate_title">{name}</div>
      <div class="team_introduce_teammate_description">{description}</div>
    </div>
  </div>
</div>

<style lang="scss">
  .team_introduce_container {
    display: flex;
    box-sizing: border-box;
    margin: 0 auto;
    
  }
  .team_introduce_teammate_box {
    text-align: center;
    position: relative;
    box-shadow: 6px 5px 17px 4px rgba(127,127,127,0.39);
    width: 200px;
    padding: 40px 16px 40px 16px;
    border-radius: 24px;
    cursor: pointer;

    &:hover {
      box-shadow: 11px 12px 17px 4px rgba(127,127,127,0.39);
    }
  }

  .team_introduce_teammate_image {
    position: absolute;
    top: -46px;
    left: 50%;
    transform: translateX(-50%);
    box-shadow: 0px -4px 15px 7px rgba(97,97,97,0.46);
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }

  .team_introduce_text_container {
  }

  .team_introduce_teammate_title {
    font-weight: 700;
    font-size: 20px;
    line-height: 28px;
  }
  
  .team_introduce_teammate_description {
    font-size: 20px;
    margin-top: 5px;
  }
</style>