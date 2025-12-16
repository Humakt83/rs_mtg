import csv from 'csv-parser';
import fs from 'fs'
import axios from 'axios';

const apiEndpoint = 'https://api.magicthegathering.io/v1/cards?name=';
const results = [];

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
        await sleep(200 * idx);
        const response = await axios.get(apiEndpoint + r, { responseType: 'json', headers: {"User-Agent": 'card-names-to-data-json/0.1', Accept: 'application/json'}});
        const first = response.data.cards[0];        
        if (!first) {
            console.log(r, response.data);
            return {name: r};
        }
        return {
            name: first.name, 
            manaCost: first.manaCost,
            cmc: first.cmc,
            colors: first.colors,
            colorIdentity: first.colorIdentity,
            types: first.types,
            supertypes: first.supertypes,
            subtypes: first.subtypes,
            //text: first.text,
            power: first.power,
            toughness: first.toughness,
            imageUrl: first.imageUrl,
        };
    }));
}

fs.createReadStream('cube.csv')
  .pipe(csv())
  .on('data', (data) => results.push(data.Name))
  .on('end', () => {
    readMtG().then(writeToJson);
  });