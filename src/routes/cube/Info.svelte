<script>
  import Booster from '$lib/draft/Booster.svelte';
  import {sampleBooster} from '$lib/draft/draft.util.ts';

  export let cards;

  let cardsInBooster = [];

</script>

<main>
  <div class="info">
    <h4>Themes</h4>
    <p>
      Dragons <i class="ms ms-cost ms-r" /><i class="ms ms-cost ms-ci-gwub smaller" />
      Wizards <i class="ms ms-cost ms-u" />  
      Artifacts: <i class="ms ms-cost ms-c" /><i class="ms ms-cost ms-ci-5" />
      Elves: <i class="ms ms-cost ms-g" /><i class="ms ms-cost ms-b smaller" /><i class="ms ms-cost ms-u smaller" />
      Spellslinger: <i class="ms ms-cost ms-u" /><i class="ms ms-cost ms-r" />
      Equipment: <i class="ms ms-cost ms-w" /><i class="ms ms-cost ms-r" /><i class="ms ms-cost ms-b" />
    </p>
    <button on:click={() => cardsInBooster = sampleBooster(cards)}>Sample Booster</button>
    {#if cardsInBooster.length > 0}
      <Booster cardsInBooster={cardsInBooster}/>
    {/if}
  </div>
</main>

<style lang="scss" scoped>
  @import '../../vars.scss';

  main {

    button {
        background-color: $background-color;
        color: $color;
        border: $background-color;
        padding: 0.5rem 2rem;
        font-weight: bolder;
        border-radius: 2px;
        &:hover {
            background-color: darken($background-color, 10);
        }
    }

    .info {
      position: relative;
      background-color: $color;
      color: $background-color;
      margin: 0 auto 1rem;
      padding: 0.5rem 2rem;
      border: $content-border;
      text-align: center;
      width: 80%;
      h4 {
        margin-bottom: 0;
      }
      i {
        font-size: small;
        margin-right: 2px;
        &.smaller {
          font-size: x-small;
          margin-right: 1px;
        }   
      }
    }
  }
</style>
