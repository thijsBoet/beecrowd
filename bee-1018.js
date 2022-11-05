function bankNotes(n) {
	let remainder = n;
	let result = '';

	result += `${Math.floor(n / 100)} nota(s) de R$ 100,00\n`;
	remainder = remainder % 100;

    result += `${Math.floor(remainder / 50)} nota(s) de R$ 50,00\n`;
    remainder = remainder % 50;

    result += `${Math.floor(remainder / 20)} nota(s) de R$ 20,00\n`;
    remainder = remainder % 20;

    result += `${Math.floor(remainder / 10)} nota(s) de R$ 10,00\n`;
    remainder = remainder % 10;

    result += `${Math.floor(remainder / 5)} nota(s) de R$ 5,00\n`;
    remainder = remainder % 5;

    result += `${Math.floor(remainder / 2)} nota(s) de R$ 2,00\n`;
    remainder = remainder % 2;

    result += `${Math.floor(remainder / 1)} nota(s) de R$ 1,00\n`;

    console.log(result);
	return result;
}

bankNotes(576);