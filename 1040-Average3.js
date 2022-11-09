const input = require('fs').readFileSync('/dev/stdin', 'utf8');

const valor = input.split('\n');

const [x1, x2, x3, x4] = valor.shift().split(' ');
const notaExame = parseFloat(valor.shift());

const Media = (x1 * 2 + x2 * 3 + x3 * 4 + parseFloat(x4)) / 10;

console.log(`Media: ${Media.toFixed(1)}`);

if (Media >= 7.0) {
	console.log('Aluno aprovado.');
} else if (Media < 5.0) {
	console.log('Aluno reprovado.');
} else {
	console.log('Aluno em exame.');
	console.log(`Nota do exame: ${notaExame.toFixed(1)}`);
	const mediaFinal = (notaExame + Media) / 2;
	if (mediaFinal >= 5.0) {
		console.log('Aluno aprovado.');
	} else {
		console.log('Aluno reprovado.');
	}
	console.log(`Media final: ${mediaFinal.toFixed(1)}`);
}
