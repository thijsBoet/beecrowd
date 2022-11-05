var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var a = parseFloat(lines.shift());

console.log(`VOLUME = ${((4/3) * 3.14159 * Math.pow(a, 3)).toFixed(3)}`);