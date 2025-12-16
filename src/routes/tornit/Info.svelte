<script>
  import Booster from "$lib/draft/Booster.svelte";
  import {sampleBooster} from '$lib/draft/draft.util.ts';
  export let cards;

  let cardsInBooster = [];

</script>

<main>
  <div class="info">
    <h4>Rules</h4>
    <p>
      7 Towers is a special multiplayer format where you make 7 libraries (one for each color, one for lands and last one for the multicolored and colorless cards) that are shared by all players.
    </p>  
    <ul>
      <li>Use all the cards of cube to make these 7 libraries.</li>
      <li>For the land library, shuffle basic lands together with non-basics. Good amount of basic lands is 5 times per amount of players for each basic land type.</li>
      <li>Players can draw cards from any of the libraries.</li>
      <li>Starting hand size is only 3 cards and you can mulligan once.</li>
      <li>When the game begins, before the first player draws a card, top card of each library is revealed and put into the middle so all players can see them. </li>
      <li>At the beginning of the draw phase, before drawing a card for the turn, the player whose turn it is picks one of the revealed cards and places it into their hand.</li> 
      <li>Placing a card into the hand this way is not counted as drawing a card.</li>
      <li>When last of the revealed cards is picked, on the beginning of the next turn, 7 new cards (one from each library) is revealed and placed into the middle of the table.</li>
      <li>Players have shared libraries, but nothing else is shared. So each player has their own graveyard and exiled card zones.</li>
      <li>Maximum hand size is the normal 7 cards.</li>
    </ul>
    <p>
      Since you can always choose to draw cards from the land library, this format ensures that you do not get manascrewed or flooded. There is a possibility for getting color screwed, but you can mitigate that by drawing cards from the libraries you have mana for.
      This format has proven to provide balanced, swingy and/or quick multiplayer games. However, not all Magic cards are suitable for this format, like tutors and other search effects.
    </p>
    <h4>Themes</h4>
    <p>
      Enchantments <i class="ms ms-cost ms-ci-5" />
      Goblins <i class="ms ms-cost ms-r" /><i class="ms ms-cost ms-b smaller" />
      Zombies <i class="ms ms-cost ms-b" /><i class="ms ms-cost ms-u smaller" />
      Planeswalkers <i class="ms ms-cost ms-r" /><i class="ms ms-cost ms-w" />
      Morph <i class="ms ms-cost ms-u" /><i class="ms ms-cost ms-g smaller" /><i class="ms ms-cost ms-w smaller" />
      Tokens <i class="ms ms-cost ms-g" /><i class="ms ms-cost ms-w smaller" />
      +1/+1 Counters <i class="ms ms-cost ms-g" /><i class="ms ms-cost ms-w smaller" />
      Humans <i class="ms ms-cost ms-w" />
      Graveyard <i class="ms ms-cost ms-b" />
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

    ul {
      margin-left: 3rem;
      text-align: left;
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
