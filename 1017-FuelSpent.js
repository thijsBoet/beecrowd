var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var time = parseInt(lines.shift());
var averageSpeed = parseInt(lines.shift());

const liters = (time * averageSpeed) / 12;

console.log(liters.toFixed(3));

