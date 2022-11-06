var input = require('fs').readFileSync('/dev/stdin', 'utf8');
const [a, b, c] = input.split(' ').map(item => parseInt(item));

let great = (a + b + Math.abs(a - b)) / 2;
const result = (great + c + Math.abs(c - great)) / 2;

console.log(`${result} eh o maior`);