import fs from 'fs'
import axios from 'axios';

const API = 'https://api.scryfall.com/cards/named?exact=';
const results = [];

function formImageUrl(multiverseId) {
  return `https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=${multiverseId}&type=card`
}

function writeToJson(cards) {
    fs.writeFile('cube.json', JSON.stringify(cards), 'utf8', () => console.log('Finished'));
}

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function readMtG() {
    return await Promise.all(results.map(async (r, idx) => {
        await sleep(2000 * idx);
        try {
          console.log(`Searching card ${idx + 1}/${results.length}`);
          const response = await axios.get(API + r, { responseType: 'json', headers: {"User-Agent": 'card-names-to-data-json/0.1', Accept: 'application/json'}});
          const card = response.data;
          const types = card.type_line.split('—')[0].split[' '];
          const subtypes = card.type_line.includes('—') ? card.type_line.split('—')[1].split[' '] : [];
          return {
              name: card.name, 
              manaCost: card.mana_cost,
              cmc: card.cmc,
              colors: card.colors,
              colorIdentity: card.color_identity,
              gameChanger: card.gameChanger,
              artist: card.artist,
              types,
              supertypes: [],
              subtypes,
              text: card.oracle_test,
              power: card.power,
              toughness: card.toughness,
              imageUrl: formImageUrl(card.multiverse_ids[0]),
          };
        } catch (e) {
          console.error(e);
          return {name: r.replace('+', ' ')};
        } 
    }));
}

fs.createReadStream('cards.json')
  .on('data', (data) => results.push(...(JSON.parse(data).map(cardName => cardName.replace(' ', '+')))))
  .on('end', () => {
    readMtG().then(writeToJson);
  });