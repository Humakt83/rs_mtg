import fs from 'fs'

const FOLDER = 'resources';

const results = [];

function writeToJson(cards) {
    fs.writeFile('cards.json', JSON.stringify(cards), 'utf8', () => console.log('Finished'));
}

const files = fs.readdirSync(FOLDER);

console.log('Reading data from files', files);

files.forEach(file => {
  const fileContent = fs.readFileSync(`${FOLDER}/${file}`);
  JSON.parse(fileContent).map(c => {
    if (!results.includes(c.name)) {
      results.push(c.name)
    }
  })
});

writeToJson(results.sort());
