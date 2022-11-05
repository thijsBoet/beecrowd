// var input = require('fs').readFileSync('/dev/stdin', 'utf8');
// var lines = input.split('\n');

var n = 13
 //parseInt(lines.shift());

const str = n.toString()

for (let i = str.length; i >= 0; i--) {
    if (str[i - 1] + str[i] == '13') {
        console.log(`${n} es de Mala Suerte`);
        return `${n} es de Mala Suerte`;
    }
}

console.log(`${n} No es de Mala Suerte`);
return `${n} No es de Mala Suerte`;