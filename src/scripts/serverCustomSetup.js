const fs = require('fs');
const json = JSON.parse(fs.readFileSync('./tsconfig.json').toString());
json.compilerOptions.noEmit = false; // need this to be false so server can build with ts
fs.writeFile('./tsconfig.json', JSON.stringify(json, null, 2), () => console.log('Updated TS config: json.noEmit = false'));