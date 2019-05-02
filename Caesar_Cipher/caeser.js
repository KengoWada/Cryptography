const readLine = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout
});

function encrypt(plainText) {
	let cipherText = '';
	[...plainText].forEach(character => {
		const newCharacterAscii = (character.charCodeAt() + 3) % 127;

		if (newCharacterAscii < 32) {
			const newCharacter = String.fromCharCode(32 + newCharacterAscii);
			cipherText += newCharacter;
		} else {
			const newCharacter = String.fromCharCode(newCharacterAscii);
			cipherText += newCharacter;
		}
	});

	return cipherText;
}

function decrypt(cipherText) {
	let plainText = '';
	[...cipherText].forEach(character => {
		const originalCharacterAscii = (character.charCodeAt() - 3) % 127;

		if (originalCharacterAscii < 32) {
			const originalCharacter = String.fromCharCode(
				127 - (32 - originalCharacterAscii)
			);
			plainText += originalCharacter;
		} else {
			const originalCharacter = String.fromCharCode(originalCharacterAscii);
			plainText += originalCharacter;
		}
	});

	return plainText;
}

readLine.question('Enter 0 to encrypt or 1 to decrypt: ', answer => {
	if (answer === '0') {
		readLine.question('Enter plain text to encrypt: ', plainText => {
			const cipherText = encrypt(plainText);
			console.log(cipherText);
			readLine.close();
		});
	} else if (answer === '1') {
		readLine.question('Enter cipher text to decrypt: ', cipherText => {
			const plainText = decrypt(cipherText);
			console.log(plainText);
			readLine.close();
		});
	} else {
		console.log('Enter either 0 or 1');
		readLine.close();
	}
});
