const readLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

const { caeserEncrypt, caeserDecrypt } = require('./algorithms/caeser');
const { viginereEncrypt, viginereDecrypt } = require('./algorithms/vigenere');
const { playfairEncrypt, playfairDecrypt } = require('./algorithms/playfair');

function execute(message, functionName) {
    readLine.question(message, input => {
        console.log(functionName(input));
        readLine.close();
    });
    return;
}

function runAlgorithm(encryptionFunc, decryptionFunc) {
    readLine.question('Enter 0 to encrypt or 1 to decrypt: ', input => {
        if (input === '0') {
            execute('Enter plain text to encrypt: ', encryptionFunc);
        } else if (input === '1') {
            execute('Enter cipher text to decrypt: ', decryptionFunc);
        } else {
            console.log('Enter either 0 or 1');
            readLine.close();
        }
    });
    return;
}

console.log('IMPLEMENTED ALGORITHMS');
console.log('[1]. Caeser Cipher');
console.log("[2]. Viginère's Cipher");
console.log('[3]. Playfair Cipher');

readLine.question('Enter encryption algorithm number: ', answer => {
    switch (answer) {
        // Caeser Cipher
        case '1': {
            runAlgorithm(caeserEncrypt, caeserDecrypt);
            break;
        }
        // Vigenère's Cipher
        case '2': {
            runAlgorithm(viginereEncrypt, viginereDecrypt);
            break;
        }
        case '3': {
            runAlgorithm(playfairEncrypt, playfairDecrypt);
            break;
        }
        default:
            console.log('Invalid cypher name.');
            break;
    }
});
