var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var a = parseFloat(lines.shift());
var b = parseFloat(lines.shift());
var c = parseFloat(lines.shift());

if(a + b > c && a + c > b && b + c > a) {
    let perimeter = a + b + c;
    console.log('Perimetro = ' + perimeter.toFixed(1));
    return 'Perimetro = ' + perimeter.toFixed(1);
} else {
    let area = ((a + b) * c) / 2;
    console.log('Area = ' + area.toFixed(1));
    return 'Area = ' + area.toFixed(1);
}