<script>
  export let cube;
  import SectionContainer from './SectionContainer.svelte';

  let cardToShow = null;

  function getCardsByColors(colors) {
    return cube.filter(c => c?.colors?.length === colors.length && colors.every(color => c?.colors?.includes(color)));
  }

  const moreThan3 = cube.filter(c => c?.colors?.length > 3);

  const lands = cube.filter(c => c?.types?.includes('Land'));
  const conspiracies = cube.filter(c => c?.types?.includes('Conspiracy'));
  const colorless = cube.filter(c => !c.colors && !c?.types?.includes('Land') && !c?.types?.includes('Conspiracy'));

  function showCard(card) {
    cardToShow = card;
  }

</script>

<main>
  {#if cardToShow}
    <img class="card_image" src={cardToShow.imageUrl} alt={cardToShow.name} />
  {/if}
  <div class="cube_content">
    <SectionContainer sectionName="White" cards={getCardsByColors(['W'])} showCard={showCard} sectionIcon="ms-w"></SectionContainer>
    <SectionContainer sectionName="Blue" cards={getCardsByColors(['U'])} showCard={showCard} sectionIcon="ms-u"></SectionContainer>
    <SectionContainer sectionName="Black" cards={getCardsByColors(['B'])} showCard={showCard} sectionIcon="ms-b"></SectionContainer>
    <SectionContainer sectionName="Red" cards={getCardsByColors(['R'])} showCard={showCard} sectionIcon="ms-r"></SectionContainer>
    <SectionContainer sectionName="Green" cards={getCardsByColors(['G'])} showCard={showCard} sectionIcon="ms-g"></SectionContainer>

    <SectionContainer sectionName="Azorius" cards={getCardsByColors(['W', 'U'])} showCard={showCard} sectionIcon="ms-guild-azorius"></SectionContainer>
    <SectionContainer sectionName="Dimir" cards={getCardsByColors(['U', 'B'])} showCard={showCard} sectionIcon="ms-guild-dimir"></SectionContainer>
    <SectionContainer sectionName="Rakdos" cards={getCardsByColors(['B', 'R'])} showCard={showCard} sectionIcon="ms-guild-rakdos"></SectionContainer>
    <SectionContainer sectionName="Gruul" cards={getCardsByColors(['R', 'G'])} showCard={showCard} sectionIcon="ms-guild-gruul"></SectionContainer>
    <SectionContainer sectionName="Selesnya" cards={getCardsByColors(['G', 'W'])} showCard={showCard} sectionIcon="ms-guild-selesnya"></SectionContainer>

    <SectionContainer sectionName="Orzhov" cards={getCardsByColors(['W', 'B'])} showCard={showCard} sectionIcon="ms-guild-orzhov"></SectionContainer>
    <SectionContainer sectionName="Boros" cards={getCardsByColors(['W', 'R'])} showCard={showCard} sectionIcon="ms-guild-boros"></SectionContainer>
    <SectionContainer sectionName="Izzet" cards={getCardsByColors(['U', 'R'])} showCard={showCard} sectionIcon="ms-guild-izzet"></SectionContainer>
    <SectionContainer sectionName="Simic" cards={getCardsByColors(['U', 'G'])} showCard={showCard} sectionIcon="ms-guild-simic"></SectionContainer>
    <SectionContainer sectionName="Golgari" cards={getCardsByColors(['G', 'B'])} showCard={showCard} sectionIcon="ms-guild-golgari"></SectionContainer>

    <SectionContainer sectionName="Bant" cards={getCardsByColors(['W', 'U', 'G'])} showCard={showCard} sectionIcon="ms-watermark-brokers"></SectionContainer>
    <SectionContainer sectionName="Esper" cards={getCardsByColors(['W', 'U', 'B'])} showCard={showCard} sectionIcon="ms-watermark-obscura"></SectionContainer>
    <SectionContainer sectionName="Grixis" cards={getCardsByColors(['U', 'B', 'R'])} showCard={showCard} sectionIcon="ms-watermark-maestros"></SectionContainer>
    <SectionContainer sectionName="Jund" cards={getCardsByColors(['B', 'R', 'G'])} showCard={showCard} sectionIcon="ms-watermark-riveteers"></SectionContainer>
    <SectionContainer sectionName="Naya" cards={getCardsByColors(['G', 'W', 'R'])} showCard={showCard} sectionIcon="ms-watermark-cabaretti"></SectionContainer>

    <SectionContainer sectionName="Abzan" cards={getCardsByColors(['W', 'B', 'G'])} showCard={showCard} sectionIcon="ms-clan-abzan"></SectionContainer>
    <SectionContainer sectionName="Jeskai" cards={getCardsByColors(['W', 'U', 'R'])} showCard={showCard} sectionIcon="ms-clan-jeskai"></SectionContainer>
    <SectionContainer sectionName="Mardu" cards={getCardsByColors(['W', 'B', 'R'])} showCard={showCard} sectionIcon="ms-clan-mardu"></SectionContainer>
    <SectionContainer sectionName="Sultai" cards={getCardsByColors(['B', 'U', 'G'])} showCard={showCard} sectionIcon="ms-clan-sultai"></SectionContainer>
    <SectionContainer sectionName="Temur" cards={getCardsByColors(['G', 'U', 'R'])} showCard={showCard} sectionIcon="ms-clan-temur"></SectionContainer>

    <SectionContainer sectionName="Colorless" cards={colorless} showCard={showCard} sectionIcon="ms-c"></SectionContainer>
    <SectionContainer sectionName="Lands" cards={lands} showCard={showCard} sectionIcon="ms-land"></SectionContainer>
    <SectionContainer sectionName="More than Three Colors" cards={moreThan3} showCard={showCard} sectionIcon="ms-watermark-colorpie"></SectionContainer>
    {#if conspiracies.length > 0}
      <SectionContainer sectionName="Conspiracy" cards={conspiracies} showCard={showCard} sectionIcon="ms-watermark-conspiracy"></SectionContainer>
    {/if}
  </div>
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
