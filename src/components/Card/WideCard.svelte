<script lang="ts" context="module">
  export interface WideCardProps {
    className?: string;
    title: string;
    content: string;
  }
</script>

<script lang="ts">
  export let className: WideCardProps['className'];
  export let title: WideCardProps['title'];
  export let content: WideCardProps['content'];
</script>

<div class="card-wrapper {className}">
  <h3 class="card-title">{title}</h3>
  <div class="card-content">{content}</div>
</div>

<style>
  .card-wrapper * {
    color: #fff;
    font-family: SangSangFlowerRoad, Noto Sans KR, Roboto;
    width: 100%;
    padding: 0 16px;
  }

  .card-title {
    font-size: 50px;
    font-weight: 700;
  }

  .card-content {
    font-size: 30px;
    font-weight: 400;
    white-space: pre;
  }
</style>
