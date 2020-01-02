/* eslint-disable no-undef */
const expect = require('chai').expect;

const { caeserEncrypt, caeserDecrypt } = require('../algorithms/caeser');

describe('Test Caeser Cipher Encryption', () => {
    it('It should return correct encrypted values', () => {
        expect(caeserEncrypt('Kengo'))
            .to.have.property('cipherText')
            .to.equal('NHQJR');
    });

    it('It should return error message for non alphabet characters', () => {
        expect(caeserEncrypt('1234'))
            .to.have.property('message')
            .to.equal('Invalid characters');
    });
});

describe('Test Caeser Cipher Decryption', () => {
    it('It should return correct plain strings for the cipher text provided', () => {
        expect(caeserDecrypt('NHQJR'))
            .to.have.property('plainText')
            .to.equal('KENGO');

        expect(caeserDecrypt('ABC'))
            .to.have.property('plainText')
            .to.equal('XYZ');
    });

    it('It sshould throw an error if invalid cipher text is provided', () => {
        expect(caeserDecrypt('nhqjr'))
            .to.have.property('message')
            .to.equal('Invalid characters');
    });
});
