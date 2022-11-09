var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var a = parseInt(lines.shift());
var b = parseInt(lines.shift());
var c = parseInt(lines.shift());

var sortedAsc = [a, b, c].sort((a, b) => a - b);

sortedAsc.forEach(num => console.log(num));
console.log('\n');
[a, b, c].forEach(num => console.log(num));
