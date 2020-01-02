const expect = require('chai').expect;

const { viginereEncrypt, viginereDecrypt } = require('../algorithms/vigenere');

describe('Test Viginere Cipher Encryption', () => {
    it('It should return the correct encrypted values', () => {
        expect(viginereEncrypt('KENGO'))
            .to.have.property('cipherText')
            .to.equal('CSZKJ');
    });

    it('It should return error when invalid input is given', () => {
        expect(viginereEncrypt('1234'))
            .to.have.property('error')
            .to.equal('Enter only letters in the English alphabet');
    });
});

describe('Test Vigenere Cipher Decryption', () => {
    it('It should return the correct plain strings for the cipher text provided', () => {
        expect(viginereDecrypt('XOUPN'))
            .to.have.property('plainText')
            .to.equal('FAILS');
    });

    it('It should return an error when invalid cipher text is provided', () => {
        expect(viginereDecrypt('abcdef'))
            .to.have.property('error')
            .to.equal('Enter only letters in the English alphabet');

        expect(viginereDecrypt('1234'))
            .to.have.property('error')
            .to.equal('Enter only letters in the English alphabet');
    });
});
