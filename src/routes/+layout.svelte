<script>
    import Menu from './Menu.svelte';
</script>

<div class="app">
    <Menu />

    <main>
        <h1>Cubes and Stuff MtG</h1>
        <slot />
    </main>
</div>

<style lang="scss">
  @import '../vars.scss';

  :root {
    font-family: Goudy, Matrix, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: $background-color;
    font-size: 1.05rem;
  }

  :global(body) {
    text-align: center;
    a {
      text-decoration: none;
      color: $highlight-color;
      &:link {
        color: $highlight-color;
      }
      &:visited {
        color: $background-color;
      }
    }
  }

  h1 {
    color: $highlight-color;
    text-transform: uppercase;
    font-size: 2.5rem;
    @media screen and (max-width: 600px) {
      font-size: 1.3rem;
    }

    font-weight: bold;
    line-height: 1.1;
    margin: 2rem auto;
    width: fit-content;
    border-bottom: 5px solid $highlight-color;
  }
  
</style>