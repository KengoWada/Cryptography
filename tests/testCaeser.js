/* eslint-disable no-undef */
const chai = require('chai');

const { caeserEncrypt, caeserDecrypt } = require('../algorithms/caeser');

describe('Test Caeser Cipher Encryption', () => {
    it('It should return correct encrypted values', done => {
        chai.expect(caeserEncrypt('Kengo'))
            .to.have.property('cipherText')
            .to.equal('NHQJR');
        done();
    });
    it('It should return error message for non alphabet characters', () => {
        chai.expect(caeserEncrypt('1234'))
            .to.have.property('message')
            .to.equal('Invalid characters');
    });
});

describe('Test Caeser Cipher Decryption', () => {
    it('It should return correct plain strings for the cipher text provided', () => {
        chai.expect(caeserDecrypt('NHQJR'))
            .to.have.property('plainText')
            .to.equal('KENGO');

        chai.expect(caeserDecrypt('ABC'))
            .to.have.property('plainText')
            .to.equal('XYZ');
    });

    it('It sshould throw an error if invalid cipher text is provided', () => {
        chai.expect(caeserDecrypt('nhqjr'))
            .to.have.property('message')
            .to.equal('Invalid characters');
    });
});
