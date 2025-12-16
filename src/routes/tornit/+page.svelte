<script>
  import cubeList from '$lib/resources/7-towers-cube.json';
  import Cube from '$lib/cube/Cube.svelte';
  import Info from './Info.svelte';

</script>

<main>
  <h3 class="cube_title" id="cube">7 Towers Cube</h3>
  <Info cards={cubeList} />
  <Cube cube={cubeList} />
</main>

<style lang="scss" scoped>
  @import '../../vars.scss';

  main {
    max-width: 90vw;
    position: relative;
    background-color: $background-color;
    margin: 0 auto;
    padding: 0.5rem 2rem;

    @media screen and (max-width: 600px) {
      padding: 0.5rem;
    }
    border: $content-border;
    margin-bottom: 2rem;
    
    h3 {
      font-size: larger;
    }

    .cube_content {
      position: relative;
      display: grid;
      grid-template-columns: repeat(5, minmax(0, 1fr));
      @media screen and (max-width: 600px) {
        grid-template-columns: repeat(1, minmax(0, 1fr));
      }
      column-gap: 0.5rem;
      row-gap: 0.5rem;
      justify-content: stretch;
    }

    .card_image {
      position: fixed;
      top: 1rem;
      width: 300px;
      z-index: 200;
      @media screen and (max-width: 600px) {
        right: 1rem;
      }
    }
  }
</style>
