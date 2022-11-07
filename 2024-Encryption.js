// var input = require('fs').readFileSync('/dev/stdin', 'utf8');
// var lines = input.split('\n');
// var prompt = function (texto) {
// 	return lines.shift();
// };
const msg = "Texto #3"// parseInt(prompt());
let encrypted = "";

msg
	.split('')
	.forEach(
		(letter, index) => (encrypted += String.fromCharCode(letter.charCodeAt(0) + 3))
	);

encrypted = encrypted
	.split('')
	.reverse()
	.map(letter => (letter = String.fromCharCode(letter.charCodeAt(0) - 1)))
	.join('');

console.log(encrypted);