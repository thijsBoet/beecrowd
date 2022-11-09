var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var N = parseFloat(lines.shift());

if (N < 0 || N > 100) console.log('Fora de intervalo');
if (N >= 0 && N <= 25) console.log('Intervalo [0,25]');
if (N > 25 && N <= 50) console.log('Intervalo (25,50]');
if (N > 50 && N <= 75) console.log('Intervalo (50,75]');
if (N > 75 && N <= 100) console.log('Intervalo (75,100]');
