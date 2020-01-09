const expect = require('chai').expect;

const { isSuperset, union, intersection } = require('../utils/setFunctions');

const setA = new Set([1, 2, 3, 4]);
const setB = new Set([2, 3]);
const setC = new Set([3, 4, 5, 6]);
const setD = new Set([9, 8, 7, 10]);

describe('Test Superset function', () => {
    it('It should return true when a set is a superset of another', () => {
        expect(isSuperset(setA, setB)).to.equal(true);
    });

    it('It should return false when a set is not a superset of another', () => {
        expect(isSuperset(setA, setD)).to.equal(false);
    });
});

describe('Test union function', () => {
    it('It should return a set of all elements', () => {
        expect([...union(setA, setC)].length).to.equal(6);
        expect(union(setA, setC)).to.be.an.instanceOf(Set);
    });
});

describe('Test intersection function', () => {
    it('It should return the intersection set', () => {
        expect([...intersection(setA, setC)].length).to.equal(2);
        expect(intersection(setA, setC)).to.be.an.instanceOf(Set);
    });
});
