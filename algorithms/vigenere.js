const { LETTERS, LETTERS_ARRAY } = require('./constants');

const KEY = 'SOMEVERYSECRETKEY';
// const KEY = 'VECTOR';
const keyLength = KEY.length;

function viginereEncrypt(plainText) {
    plainText = plainText.replace(/\s/g, '').toUpperCase();
    regex = /^[A-Z]+$/;
    if (!regex.test(plainText)) {
        return {
            message: 'Invalid characters',
            error: 'Enter only letters in the English alphabet',
        };
    }

    let i = 0;
    let cipherText = '';

    for (const letter of plainText) {
        const keyValue = LETTERS[KEY[i++ % keyLength]];
        const encryptedValue = (keyValue + LETTERS[letter]) % 26;
        cipherText += LETTERS_ARRAY[encryptedValue];
    }

    return { message: 'Done', cipherText, plainText };
}

function viginereDecrypt(cipherText) {
    regex = /^[A-Z]+$/;
    if (!regex.test(cipherText)) {
        return {
            message: 'Invalid characters',
            error: 'Enter only letters in the English alphabet',
        };
    }

    let i = 0;
    let plainText = '';

    for (const letter of cipherText) {
        const keyValue = LETTERS[KEY[i++ % keyLength]];
        const decryptedValue = (LETTERS[letter] - keyValue + 26) % 26;
        plainText += LETTERS_ARRAY[decryptedValue];
    }

    return { message: 'Done', cipherText, plainText };
}

module.exports = { viginereEncrypt, viginereDecrypt };
