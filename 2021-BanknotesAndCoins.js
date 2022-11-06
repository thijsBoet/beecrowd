var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var N = parseFloat(lines.shift());

const notes = [100, 50, 20, 10, 5, 2];
const coins = [1, 0.5, 0.25, 0.1, 0.05, 0.01];

const result =
	notes.reduce((acc, note) => {
		const quantity = Math.floor(N / note);
		N = N % note;
		return `${acc}
${quantity} nota(s) de R$ ${note.toFixed(2)}`;
	}, 'NOTAS:') +
	coins.reduce((acc, coin) => {
		const quantity = Math.floor(N / coin);
		N = N % coin;
		return `${acc}
${quantity} moeda(s) de R$ ${coin.toFixed(2)}`;
	}, '\nMOEDAS:');

console.log(result);
