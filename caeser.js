const caeserEncrypt = plainText => {
	let cipherText = '';

	for (let letter of plainText) {
		const newCharacterAscii = (letter.charCodeAt() + 3) % 127;
		cipherText +=
			newCharacterAscii < 32
				? String.fromCharCode(32 + newCharacterAscii)
				: String.fromCharCode(newCharacterAscii);
	}

	return cipherText;
};

const caeserDecrypt = cipherText => {
	let plainText = '';

	for (let letter of cipherText) {
		const originalCharacterAscii = (letter.charCodeAt() - 3) % 127;

		plainText +=
			originalCharacterAscii < 32
				? String.fromCharCode(127 - (32 - originalCharacterAscii))
				: String.fromCharCode(originalCharacterAscii);
	}

	return plainText;
};

module.exports = { caeserEncrypt, caeserDecrypt };
