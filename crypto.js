/* eslint-disable no-console */
const readLine = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const { caeserEncrypt, caeserDecrypt } = require('./caeser');

const execute = (message, functionName) => {
  readLine.question(message, (input) => {
    console.log(functionName(input));
    readLine.close();
  });
};

console.log('IMPLEMENTED ALGORITHMS');
console.log('NOTE: Copy and paste the algorithm name');
console.log('1. Caeser Cipher');

readLine.question('Enter encryption algorithm name: ', (answer) => {
  switch (answer) {
    case 'Caeser Cipher': {
      readLine.question('Enter 0 to encrypt or 1 to decrypt: ', (input) => {
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
    default:
      console.log('Invalid cypher name.');
      break;
  }
});
