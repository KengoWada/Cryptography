/* eslint-disable no-console */
const readLine = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const { caeserEncrypt, caeserDecrypt } = require('./caeser');

console.log('IMPLEMENTED ALGORITHMS');
console.log('NOTE: Copy and paste the algorithm name');
console.log('1. Caeser Cipher');

readLine.question('Enter encryption algorithm name: ', (answer) => {
  switch (answer) {
    case 'Caeser Cipher': {
      readLine.question('Enter 0 to encrypt or 1 to decrypt: ', (input) => {
        if (input === '0') {
          readLine.question('Enter plain text to encrypt: ', (plainText) => {
            const cipherText = caeserEncrypt(plainText);
            console.log(cipherText);
            readLine.close();
          });
        } else if (input === '1') {
          readLine.question('Enter cipher text to decrypt: ', (cipherText) => {
            const plainText = caeserDecrypt(cipherText);
            console.log(plainText);
            readLine.close();
          });
        } else {
          console.log('Enter either 0 or 1');
          readLine.close();
        }
      });
      break;
    }
    default:
      console.log('Invalid cypher name.');
      break;
  }
});
