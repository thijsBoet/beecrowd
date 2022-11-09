var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var x = parseInt(lines.shift());
var y = parseInt(lines.shift());

const products = {
    1: 4,
    2: 4.5,
    3: 5,
    4: 2,
    5: 1.5
}

console.log('Total: R$ ' + (products[x] * y).toFixed(2));
return 'Total: R$ ' + (products[x] * y).toFixed(2);