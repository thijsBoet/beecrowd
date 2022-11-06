var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var n = parseInt(lines.shift());

const minutes = n / 30 * 60;

console.log(`${minutes} minutos`);