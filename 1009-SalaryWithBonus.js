var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var empName = lines.shift();
var salary = parseFloat(lines.shift());
var sold = parseFloat(lines.shift());

console.log(`TOTAL = R$ ${(salary + sold * 0.15).toFixed(2)}`);
