<script>
  import Booster from '$lib/draft/Booster.svelte';
  import PickedCardsArea from './PickedCardsArea.svelte';

  export let draft;

  let currentRound = draft.currentRound;

  let activeBooster = draft.getActiveBooster();

  let pickedCards = draft.pickedCards;
  let selectedCards = [];

  function makePick() {
    draft.pickCards(selectedCards);
    activeBooster = draft.getActiveBooster();
    currentRound = draft.currentRound;
    pickedCards = draft.pickedCards;
    selectedCards = [];
  }

  function selectCard(idx) {
    if (selectedCards.includes(idx)) {
        selectedCards = selectedCards.filter(i => i !== idx);
    } else {
        selectedCards.push(idx);
        if (selectedCards.length > 2) {
            selectedCards = selectedCards.slice(1);
        }
    }
    //Creating new array so it rerenders
    selectedCards = [...selectedCards];
  }
</script>

<main>
  <div class="draftarea">
    <h3>{currentRound > 3 ? 'Draft Over' : `Round ${currentRound}`}</h3>
    {#if currentRound < 4}
      <button on:click={makePick} disabled={selectedCards.length < 2}>Pick {selectedCards.length} cards</button>
    {/if}
    <Booster cardsInBooster={activeBooster} selectCard={selectCard} highLightedCards={selectedCards}/>
    {#key pickedCards}
      <PickedCardsArea cards={pickedCards} />
    {/key}
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
        &:disabled {
            background-color: lighten($color: $background-color, $amount: 20);
        }
    }

    .draftarea {
      position: relative;
      background-color: $color;
      color: $background-color;
      margin: 0 auto 1rem;
      padding: 0.5rem 2rem;
      border: $content-border;
      text-align: center;
      width: 80%;
      display: flex;
      flex-direction: column;
      row-gap: 1rem;
      align-items: center;
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
