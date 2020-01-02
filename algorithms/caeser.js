const { LETTERS_ARRAY } = require('./constants');

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
        const newCharacterIndex = (LETTERS_ARRAY.indexOf(letter) + 3) % 26;
        cipherText += LETTERS_ARRAY[newCharacterIndex];
    }

    return { message: 'Done', cipherText, plainText };
}

function caeserDecrypt(cipherText) {
    regex = /^[A-Z]+$/;
    if (!regex.test(cipherText)) {
        return {
            message: 'Invalid characters',
            error: 'Enter only letters in the English alphabet',
        };
    }

    let plainText = '';

    for (let letter of cipherText) {
        let newCharacterIndex = LETTERS_ARRAY.indexOf(letter) - 3;
        if (newCharacterIndex < 0) {
            newCharacterIndex = 26 + newCharacterIndex;
        }
        plainText += LETTERS_ARRAY[newCharacterIndex];
    }

    return { message: 'Done', cipherText, plainText };
}

module.exports = { caeserEncrypt, caeserDecrypt };
