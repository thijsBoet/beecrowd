var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var p1 = lines.shift().split(' ');
var p2 = lines.shift().split(' ');

var p1Code = parseInt(p1.shift());
var p1Units = parseInt(p1.shift());
var p1Price = parseFloat(p1.shift());

var p2Code = parseInt(p2.shift());
var p2Units = parseInt(p2.shift());
var p2Price = parseFloat(p2.shift());

console.log(
	`VALOR A PAGAR: R$ ${(p1Units * p1Price + p2Units * p2Price).toFixed(2)}`
);
