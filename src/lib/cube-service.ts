import cards from '$lib/resources/cards.json';
import { Cube, LiteCube } from './cube-types';
import { Card } from './mtg-types';

const GLOBAL_CARDS = cards as Array<Card>;

export function enrichCubeWithCards(cube: LiteCube): Cube {
    const cardsFromCube: Array<Card> = cube.cards.map(card => 
        GLOBAL_CARDS.find(c => c.name.includes(card) && card.includes(c.name))!
    );
    return {...cube, cards: cardsFromCube};
}