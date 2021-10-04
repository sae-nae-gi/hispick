<script lang="ts" context="module">
  export interface WideCardProps {
    className?: string;
    title: string;
    content: string;
    imageUrl?: string;
  }
</script>

<script lang="ts">
  export let className: WideCardProps["className"];
  export let title: WideCardProps["title"];
  export let content: WideCardProps["content"];
  export let imageUrl: WideCardProps["imageUrl"] = "";
  export let textColor: string;
</script>

<div 
  class="card_wrapper {className}" 
  style="background-image: url({imageUrl});"
>
  <div class="card_text_box">
    <div class="card_content" style="color: {textColor};">{content}</div>
    <h3 class="card_title" style="color: {textColor};">{title}</h3>
  </div>
</div>

<style>
  .card_wrapper {
    position: relative;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    padding-top: 128%;
  }
  .card_wrapper * {
    color: #fff;
    width: 100%;
    padding: 0 16px;
    margin: 20px 0 0 0;
  }

  .card_text_box {
    position: relative;
    top: -160px;
    left: 20px;
  }
  .card_title {
    font-size: 21px;
    font-weight: 700;
    text-align: right;
    padding-right: 58px;
    margin-top: 16px;
  }

  .card_content {
    font-size: 21px;
    font-weight: 400;
    white-space: pre;
    margin-left: 16px;
  }
</style>
