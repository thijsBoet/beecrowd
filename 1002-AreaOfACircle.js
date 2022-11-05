var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var n = parseFloat(lines.shift());

console.log(`A=${(3.14159 * Math.pow(n, 2)).toFixed(4)}\n`);