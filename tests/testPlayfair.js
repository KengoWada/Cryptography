const expect = require('chai').expect;

const { playfairEncrypt, playfairDecrypt } = require('../algorithms/playfair');

describe('Test Playfair Encryption', () => {
    it('It should return correct cipher text', () => {
        expect(playfairEncrypt('PLAYFAIRMESSAGE'))
            .to.have.property('cipherText')
            .to.equal('TOINIGHSEHRYBEHM');
    });

    it('It should return an error', () => {
        expect(playfairEncrypt('$%^'))
            .to.have.property('message')
            .to.equal('Invalid characters');
    });
});

describe('Test Playfair Dcryption', () => {
    it('It should return done message', () => {
        expect(playfairDecrypt('TOINIGHSEHRYBEHM'))
            .to.have.property('message')
            .to.equal('Done');
    });

    it('It should return an error message', () => {
        expect(playfairDecrypt('kengowada'))
            .to.have.property('message')
            .to.equal('Invalid characters');
    });
});
