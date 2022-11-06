var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var N = parseInt(lines.shift());

const years = Math.floor(N / 365);
const months = Math.floor((N % 365) / 30);
const days = (N % 365) % 30;

const result =
`${years} ano(s)
${months} mes(es)
${days} dia(s)`;

console.log(result);