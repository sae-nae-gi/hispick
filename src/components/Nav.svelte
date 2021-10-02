<script>
  export let segment;
</script>

<nav>
  <ul>
    <li><a aria-current={segment === undefined ? 'page' : undefined} href=".">메시지 받기</a></li>
    <li><a aria-current={segment === 'about' ? 'page' : undefined} href="about" rel="prefetch">히스픽</a></li>
  </ul>
</nav>

<style>
  nav {
    border-bottom: 1px solid rgba(255, 62, 0, 0.1);
    font-weight: 500;
    padding: 0 1em;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  /* clearfix */
  ul::after {
    content: '';
    display: block;
    clear: both;
  }

  li {
    color: black;
    display: block;
    float: left;
  }

  [aria-current] {
    position: relative;
    display: inline-block;
  }

  [aria-current]::after {
    position: absolute;
    content: '';
    width: calc(100% - 1em);
    height: 2px;
    background-color: rgb(255, 62, 0);
    display: block;
    bottom: -1px;
  }

  a {
    font-size: 20px;
    text-decoration: none;
    padding: 1em 0.5em;
    display: block;
  }
</style>
