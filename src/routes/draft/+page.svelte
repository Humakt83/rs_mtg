<script>
  import commanderCubeList from '$lib/resources/commander-cube-v1.json';
  import towerCubeList from '$lib/resources/7-towers-cube-v1.json';
  import { Draft } from '$lib/draft/draft.util.ts';
  import { enrichCubeWithCards } from '$lib/cube-service.ts';
  import DraftArea from './DraftArea.svelte';

  const commanderCube = enrichCubeWithCards(commanderCubeList);
  const towerCube = enrichCubeWithCards(towerCubeList);

  let pickedCube = commanderCube;
  let started = false;
  let draft = null;
  
  function start() {
    started = true;
    console.log(pickedCube.cards[0]);
    draft = new Draft(pickedCube.cards);
  }

</script>

<main>
  <h3 class="cube_title" id="cube">Commander Draft</h3>
  <div class="controls">
    <label for="cube-picker">Pick Cube</label>
    <select name="cube-picker" bind:value={pickedCube}>
      <option value={commanderCube}>Commander Cube</option>
      <option value={towerCube}>7 Towers Cube</option>
    </select>
    <button on:click={start}>{started ? 'Restart' : 'Start'}</button>
  </div>  
  {#if started}
    {#key draft}
      <DraftArea draft={draft}/>
    {/key}
  {/if}
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

    .controls {
      margin-bottom: 2rem;
      select {
        padding: 5px 3px;
        color: $background-color;
        background-color: $color;
        border: 2px solid $color;
        &:hover,
        &:focus,
        &:active {
          border: 2px solid $highlight-color;
        }
      }
    }

    button {
      background-color: $background-color2;
      color: $background-color;
      border: $background-color2;
      padding: 0.5rem 2rem;
      font-weight: bolder;
      border-radius: 2px;
      &:hover {
        background-color: darken($background-color2, 10);
      }
    }
  }
</style>
