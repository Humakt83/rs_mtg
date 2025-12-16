<script>
  import { page } from '$app/stores';
  import { base } from '$app/paths';
</script>

<main>
  <nav>
    <a href="{base}/" aria-current={$page.url.pathname === '/' ? 'page' : undefined}>Home</a>
    <a href="{base}/cube/" aria-current={$page.url.pathname === '/cube/' ? 'page' : undefined}>Commander Cube</a>
    <a href="{base}/tornit/" aria-current={$page.url.pathname === '/tornit/' ? 'page' : undefined}>7 Towers Cube</a>
    <a href="{base}/draft/" aria-current={$page.url.pathname === '/draft/' ? 'page' : undefined}>Cube Draft</a>
  </nav>
</main>

<style lang="scss">
  @import '../vars.scss';

  nav {
    text-align: center;
    margin: 0 auto;
    display: inline-flex;
    background-color: $background-color;
    border: $content-border;
    padding: 1rem 2rem;

    a { 
      text-decoration: none;
      margin-right: 1rem;
      font-size: large;
      @media screen and (max-width: 600px) {
        margin-right: 0.4rem;
        font-size: smaller;
      }

      font-weight: bolder;
      &:visited {
        color: $color;
      }
      &:hover,
      &:link {
        color: $highlight-color;
      }
    }
  }
</style>