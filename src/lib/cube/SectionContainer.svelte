<script>
  import Section from './Section.svelte';
  export let sectionName = "";
  export let sectionIcon = "";
  export let cards = [];
  export let showCard = (card) => null;

  function getCardsByType(other, cardType, omitType = 'Creature') {
    return other.filter(c => c?.types?.includes(cardType) && (cardType === omitType || !c?.types?.includes(omitType)));
  }

  const legends = cards.filter(c => c?.types?.includes('Creature') && c?.supertypes?.includes('Legendary'));
  const other = cards.filter(c => !(c?.types?.includes('Creature') && c?.supertypes?.includes('Legendary')));
  const creatures = getCardsByType(other, 'Creature');
  const enchantments = getCardsByType(other, 'Enchantment');
  const artifacts = getCardsByType(other, 'Artifact');
  const planeswalkers = getCardsByType(other, 'Planeswalker');
  const sorceries = getCardsByType(other, 'Sorcery');
  const instants = getCardsByType(other, 'Instant');
  const lands = getCardsByType(other, 'Land', 'Artifact');
  const conspiracies = getCardsByType(cards, 'Conspiracy');

</script>

<main>
  <h4 class="section_title"><i class={'ms ms-3x ' + sectionIcon }/>{sectionName} {cards.length}</h4>
  <Section cards={legends} name="Legendary Creature" showCard={showCard}></Section>
  <Section cards={creatures} name="Creature" showCard={showCard}></Section>
  <Section cards={enchantments} name="Enchantment" showCard={showCard}></Section>
  <Section cards={artifacts} name="Artifact" showCard={showCard}></Section>
  <Section cards={planeswalkers} name="Planeswalker" showCard={showCard}></Section>
  <Section cards={sorceries} name="Sorcery" showCard={showCard}></Section>
  <Section cards={instants} name="Instant" showCard={showCard}></Section>
  <Section cards={lands} name="Other" showCard={showCard}></Section>
  <Section cards={conspiracies} name="" showCard={showCard}></Section>
</main>

<style lang="scss" scoped>
  @import '../../vars.scss';

  main {
    position: relative;
    background-color: $color;
    color: $background-color;
    margin: 0 auto;
    padding: 0.5rem 2rem;
    border: $content-border;
    text-align: left;
    width: 80%;

    i {
      margin-right: 0.5rem;
      vertical-align: baseline;
    }
  }
</style>