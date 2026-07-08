// Inietta i dati JSON nel template e produce index.html
const fs = require('fs');
const tpl = fs.readFileSync('template.html', 'utf8');
const data = fs.readFileSync('dati.json', 'utf8');
const out = tpl.replace(/\/\*__DATA__\*\/null\/\*__\/DATA__\*\//, data);
if (out === tpl) { console.error('ERRORE: placeholder non trovato'); process.exit(1); }
fs.writeFileSync('index.html', out);
console.log('index.html scritto,', out.length, 'byte');
