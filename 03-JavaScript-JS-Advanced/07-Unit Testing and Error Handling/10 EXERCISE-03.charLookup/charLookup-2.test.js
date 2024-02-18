const lookupChar = require('./charLookup.js');
const assert = require('chai').assert;

// 100/100
describe('lookupChar function tests', () => {

    it('if parameters are okay - return char at index', () => {
        assert(lookupChar('Love', 0) === 'L');
    });

    it('if parameters are okay - return char at index', () => {
        assert(lookupChar('Love', 2) === 'v');
    });

    it('Negative string index', () => {
        assert.equal(lookupChar('', 0), 'Incorrect index');
    });

    it('Index over the string length', () => {
        assert(lookupChar('Love', 10) === 'Incorrect index');
        assert(lookupChar('Love', 4) === 'Incorrect index');
    });

    it('Negative string index', () => {
        assert.equal(lookupChar('Love', -1), 'Incorrect index');
        assert.equal(lookupChar('Love', -5), 'Incorrect index');
        assert.equal(lookupChar('Love', -60), 'Incorrect index');
    });

    it('Return undefined if first parameter is not string', () => {
        assert(lookupChar(100, 10) === undefined);
    });

    it('Return undefined if string + floating-point', () => {
        assert.equal(lookupChar('Love', 5.5), undefined);
    });

});
