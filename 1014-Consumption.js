var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var distance = parseInt(lines.shift());
var fuel = parseFloat(lines.shift());

var consumption = distance / fuel;

console.log(`${consumption.toFixed(3)} km/l`);