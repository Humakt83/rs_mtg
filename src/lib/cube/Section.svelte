<script>
  export let name = "";
  export let cards = [];
  export let showCard = (card) => null;
</script>

<main>
  {#if cards.length > 0}
    {#if name.length > 0}
        <h5 class="section_title">{name} {cards.length}</h5>
    {/if}
    <div class="section">
        {#each cards as card}
            <div on:mouseenter={showCard(card)} on:mouseleave={showCard(null)}>
            {card.name}
            </div>
        {/each}
    </div>
  {/if}
</main>

<style lang="scss" scoped>
  @import '../../vars.scss';

  main {

    h5 {
        border-bottom: $content-border;
        margin-bottom: 0;
    }

    .section {
      display: 'flex';
      flex-direction: column;
      justify-items: start;
      margin-bottom: 1rem;
    }
  }
</style>