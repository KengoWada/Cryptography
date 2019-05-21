/* eslint-disable no-undef */
const chai = require('chai');

const { caeserEncrypt, caeserDecrypt } = require('../caeser');

describe('Test Caeser Cipher Encryption', () => {
  it('It should return correct encrypted values', (done) => {
    chai.expect(caeserEncrypt('Kengo'), 'Nhqjr');
    done();
  });
  it('It should return correct values for numbers', () => {
    chai.expect(caeserEncrypt('1234'), '4567');
  });
});

describe('Test Caeser Cipher Decryption', () => {
  it('It should return correct plain strings for the cipher text provided', () => {
    chai.expect(caeserDecrypt('sldnf43HBI'), 'piakc10E?F');
    chai.expect(caeserDecrypt('Nhqjr'), 'Kengo');
  });
});
