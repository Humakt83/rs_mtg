<script>
  export let cards = [];

  let cardToShow = null;

  let cardsByCMC = [0, 1, 2, 3, 4, 5, 6, '7+'].map(cmc => {
    if ('7+' === cmc) {
      return {cmc, cards: cards.filter(c => c.cmc >= 7 || c.cmc == null || c.cmc == undefined )};
    } else {
      return {cmc, cards: cards.filter(c => c.cmc === cmc)};
    }
  });

  function showCard(card) {
    cardToShow = card;
  }
</script>

<main>
  {#if cards.length > 0}
    <h3>Picked Cards</h3>
    <div class="picked-cards">      
      {#each cardsByCMC as cmcCards}
        <div>
          <h5>{cmcCards.cmc}</h5>
          {#each cmcCards.cards as card}
          <div on:mouseenter={() => showCard(card)} on:mouseleave={() => showCard(null)}>
            {card.name}
          </div>
          {/each}
        </div>
      {/each}
      <div class="highlighted-card">
        {#if cardToShow}
          <img class="card_image" src={cardToShow.imageUrl} alt={cardToShow.name} />
        {/if}
      </div>
    </div>
  {/if}
</main>

<style lang="scss" scoped>
  @import '../../vars.scss';

  main {

    width: 100%;

    h5 {
        margin-bottom: 0;
    }

    .picked-cards {      
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-content: space-between;
      margin-bottom: 1rem;

      .highlighted-card {
        min-width: 160px;
        height: 220px;
        .card_image {
          border: 2px solid $highlight-color;
          border-radius: 15px;
          width: 160px;
        }
      }

      @media screen and (max-width: 600px) {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }
    }
  }
</style>