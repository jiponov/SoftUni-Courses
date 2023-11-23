const lookupChar = require('./charLookup.js');
const assert = require('chai').assert;
const expect = require('chai').expect;

// 100/100
describe('lookupChar function tests', () => {

    it('if parameter one is not string should return undefined', () => {
        assert.equal(lookupChar(10, 3), undefined);
    });
    it('if parameter two index is more than length of one should return msg incorrect', () => {
        assert.equal(lookupChar('just', 5), 'Incorrect index');
    });
    it('if parameter two index is more than length of one should return msg incorrect', () => {
        assert.equal(lookupChar('just', 12), 'Incorrect index');
    });
    it('if parameter two index is less than length of one should return msg incorrect', () => {
        assert.equal(lookupChar('just', -1), 'Incorrect index');
    });
    it('if parameter two index is less than length of one should return msg incorrect', () => {
        assert.equal(lookupChar('just', -4), 'Incorrect index');
    });
    it('if parameters are okay - simple check for the returned value', () => {
        assert.equal(lookupChar('just', 2), 's');
    });
    it('return undefined with float index', () => {
        expect(lookupChar('abc', 1.1)).to.be.undefined;
    });


})
