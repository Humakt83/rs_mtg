<script>
  export let cardsInBooster = [];
  export let selectCard = (idx) => null;
  export let highLightedCards = [];

  let loading = true;
  $: if (cardsInBooster) {
    loading = true;
    setTimeout(() => loading = false, 400);
  }
</script>

<main>
  <div class="booster-cards">    
    {#if loading}
      <div class="loader" />
    {/if}
    {#if !loading}
      {#each cardsInBooster as card, idx}
        <div role="button" tabindex="0"
            on:keypress={() => selectCard(idx)}
            on:click={() => selectCard(idx)}
            title={card.name}>
          <img 
            class={highLightedCards.includes(idx) ? 'highlighted' : ''} 
            src={card.imageUrl} 
            alt={card.name}  />
        </div>
      {/each}
    {/if}
  </div>
</main>

<style lang="scss" scoped>
  @import '../../vars.scss';

  .loader {
      transform: rotateZ(45deg);
      perspective: 1000px;
      border-radius: 50%;
      width: 88px;
      height: 88px;
      color: $highlight-color;
      margin: 0 auto;
      grid-column-start: 1;
      grid-column-end: 7;
      margin-top: 2rem;
      margin-bottom: 2rem;
    }
      .loader:before,
      .loader:after {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: inherit;
        height: inherit;
        border-radius: 50%;
        transform: rotateX(70deg);
        animation: 1s spin linear infinite;
      }
      .loader:after {
        color: $background-color;
        transform: rotateY(70deg);
        animation-delay: .4s;
      }

    @keyframes rotate {
      0% {
        transform: translate(-50%, -50%) rotateZ(0deg);
      }
      100% {
        transform: translate(-50%, -50%) rotateZ(360deg);
      }
    }

    @keyframes rotateccw {
      0% {
        transform: translate(-50%, -50%) rotate(0deg);
      }
      100% {
        transform: translate(-50%, -50%) rotate(-360deg);
      }
    }

    @keyframes spin {
      0%,
      100% {
        box-shadow: .2em 0px 0 0px currentcolor;
      }
      12% {
        box-shadow: .2em .2em 0 0 currentcolor;
      }
      25% {
        box-shadow: 0 .2em 0 0px currentcolor;
      }
      37% {
        box-shadow: -.2em .2em 0 0 currentcolor;
      }
      50% {
        box-shadow: -.2em 0 0 0 currentcolor;
      }
      62% {
        box-shadow: -.2em -.2em 0 0 currentcolor;
      }
      75% {
        box-shadow: 0px -.2em 0 0 currentcolor;
      }
      87% {
        box-shadow: .2em -.2em 0 0 currentcolor;
      }
    }
   

  main {
    .booster-cards {
      display: grid;
      grid-template-columns: repeat(7, minmax(0, 1fr));
      @media screen and (max-width: 600px) {
        grid-template-columns: repeat(5, minmax(0, 1fr));
      }
      flex-direction: row;
      column-gap: 0.5rem;
      place-items: stretch;
      div {
        img {
          border: 2px solid black;
          border-radius: 15px;
          width: 100%;
          max-height: 100%;
          &.highlighted,
          &:hover,
          &:focus {
            border: 2px solid $highlight-color;
          }
        }
      }
    }    
  }
</style>
