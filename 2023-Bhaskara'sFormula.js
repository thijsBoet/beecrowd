var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var a = parseFloat(lines.shift());
var b = parseFloat(lines.shift());
var c = parseFloat(lines.shift());

let d = b ** 2 - 4 * a * c;

if (d < 0 || a === 0) {
	console.log('Impossivel calcular');
} else {
	d = Math.sqrt(d);
	let r1 = (-b + d) / (2 * a);
	let r2 = (-b - d) / (2 * a);
	console.log('R1 = ' + r1.toFixed(5));
	console.log('R2 = ' + r2.toFixed(5));
}
