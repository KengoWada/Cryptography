const readLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

const { caeserEncrypt, caeserDecrypt } = require('./algorithms/caeser');
const { viginereEncrypt, viginereDecrypt } = require('./algorithms/vigenere');

function execute(message, functionName) {
    readLine.question(message, input => {
        console.log(functionName(input));
        readLine.close();
    });
}

console.log('IMPLEMENTED ALGORITHMS');
console.log('[1]. Caeser Cipher');
console.log("[2]. Viginère's Cipher");

readLine.question('Enter encryption algorithm number: ', answer => {
    switch (answer) {
        // Caeser Cipher
        case '1': {
            readLine.question('Enter 0 to encrypt or 1 to decrypt: ', input => {
                if (input === '0') {
                    execute('Enter plain text to encrypt: ', caeserEncrypt);
                } else if (input === '1') {
                    execute('Enter cipher text to decrypt: ', caeserDecrypt);
                } else {
                    console.log('Enter either 0 or 1');
                    readLine.close();
                }
            });
            break;
        }
        // Vigenère's Cipher
        case '2': {
            readLine.question('Enter 0 to encrypt or 1 to decrypt: ', input => {
                if (input === '0') {
                    execute('Enter plain text to encrypt: ', viginereEncrypt);
                } else if (input === '1') {
                    execute('Enter cipher text to decrypt: ', viginereDecrypt);
                } else {
                    console.log('Enter either 0 or 1');
                    readLine.close();
                }
            });
        }
        default:
            console.log('Invalid cypher name.');
            break;
    }
});
