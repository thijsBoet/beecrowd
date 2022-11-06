var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var a = parseInt(lines.shift());
var b = parseInt(lines.shift());
var c = parseInt(lines.shift());
var d = parseInt(lines.shift());

return b > c && d > a && c + d > a + b && c > 0 && d > 0 && a % 2 === 0
	? console.log('Valores aceitos')
	: console.log('Valores nao aceitos');
