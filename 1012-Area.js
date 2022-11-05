var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var area = lines.shift().split(' ');

var a = parseFloat(area[0]);
var b = parseFloat(area[1]);
var c = parseFloat(area[2]);

const PI = 3.14159;

console.log(`TRIANGULO: ${((a * c) / 2).toFixed(3)}`);
console.log(`CIRCULO: ${(PI * Math.pow(c, 2)).toFixed(3)}`);
console.log(`TRAPEZIO: ${(((a + b) * c) / 2).toFixed(3)}`);
console.log(`QUADRADO: ${(b * b).toFixed(3)}`);
console.log(`RETANGULO: ${(a * b).toFixed(3)}`);
