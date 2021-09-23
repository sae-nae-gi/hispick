<script lang="ts" context="module">
  export interface WideCardProps {
    className?: string;
    title: string;
    content: string;
    imageUrl?: string;
  }
</script>

<script lang="ts">
  export let className: WideCardProps['className'];
  export let title: WideCardProps['title'];
  export let content: WideCardProps['content'];
  export let imageUrl: WideCardProps['imageUrl'] = '';
</script>

<div class="card_wrapper {className}" style="background: url({imageUrl}) center/cover no-repeat">
  <div class="card_text_box">
    <div class="card_content">{content}</div>
    <h3 class="card_title">{title}</h3>
  </div>
</div>

<style>
  .card_wrapper {
    position: relative;
    background-size: cover;
    padding-top: 128%;
  }
  .card_wrapper * {
    color: #fff;
    font-family: SangSangFlowerRoad, Noto Sans KR, Roboto;
    width: 100%;
    padding: 0 16px;
  }

  .card_text_box {
    position: relative;
    top: -180px;
    left: 20px;
  }
  .card_title {
    font-size: 16px;
    font-weight: 700;
    text-align: right;
    margin-top: 16px;
  }

  .card_content {
    font-size: 20px;
    font-weight: 400;
    white-space: pre;
  }
</style>
