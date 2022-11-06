var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var N = parseInt(lines.shift());

var hours = Math.floor(N / 3600);
var minutes = Math.floor((N % 3600) / 60);
var seconds = (N % 3600) % 60;

const time = `${hours}:${minutes}:${seconds}`;

console.log(time);