import { Card } from "./mtg-types";

export type LiteCube = {
    name: string;
    version: number;
    cards: Array<string>;
}

export type Cube = {
    name: string;
    version: number;
    cards: Array<Card>;
}