const letters = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
];

function caeserEncrypt(plainText) {
    let cipherText = '';

    plainText = plainText.replace(/\s/g, '').toUpperCase();
    regex = /^[a-zA-Z]+$/;
    if (!regex.test(plainText)) {
        return {
            message: 'Invalid characters',
            error: 'Enter only letters in the English alphabet',
        };
    }

    for (let letter of plainText) {
        const newCharacterIndex = (letters.indexOf(letter) + 3) % 26;
        cipherText += letters[newCharacterIndex];
    }

    return { message: 'Done', cipherText, plainText };
}

function caeserDecrypt(cipherText) {
    let plainText = '';

    regex = /^[A-Z]+$/;
    if (!regex.test(cipherText)) {
        return {
            message: 'Invalid characters',
            error: 'Enter only letters in the English alphabet',
        };
    }

    for (let letter of cipherText) {
        let newCharacterIndex = letters.indexOf(letter) - 3;
        if (newCharacterIndex < 0) {
            newCharacterIndex = 26 + newCharacterIndex;
        }
        plainText += letters[newCharacterIndex];
    }

    return { message: 'Done', cipherText, plainText };
}

module.exports = { caeserEncrypt, caeserDecrypt };

// console.log(caeserEncrypt('xyz'));
console.log(caeserDecrypt('ABC'));
