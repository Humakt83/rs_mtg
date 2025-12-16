export type Colors = 'W' | 'U' | 'B' | 'R' | 'G' ;
export type CardTypes = 'Enchantment' | 'Sorcery' |'Instant' | 'Creature' | 'Planeswalker' | 'Artifact' | 'Land';
export type CardSuperTypes = 'Legendary'

export type Card = {
  name: string;
  colors: Array<Colors>;
  types: Array<CardTypes>;
  imageUrl?: string | URL;
  cmc?: number;
}
