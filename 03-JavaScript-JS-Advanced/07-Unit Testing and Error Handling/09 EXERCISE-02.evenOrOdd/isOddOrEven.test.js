const isOddOrEven = require('./isOddOrEven.js');
const assert = require('chai').assert;

// 100/100
describe('isOddOrEven function tests', () => {

    // invalid input tests (symbol !=)
    it('if parameter is number should return undefined', () => {
        assert.equal(isOddOrEven(10), undefined);
    });

    it('if parameter is object should return undefined', () => {
        assert.equal(isOddOrEven({ name: 'bing' }), undefined);
    });

    it('if parameter is array should return undefined', () => {
        assert.equal(isOddOrEven([55, 4]), undefined);
    });

    it('if parameter is undefined should return undefined', () => {
        assert.equal(isOddOrEven(undefined), undefined);
    });

    it('if parameter is null should return undefined', () => {
        assert.equal(isOddOrEven(null), undefined);
    });


    // valid input tests (symbol ==)
    it('should return even', () => {
        assert.equal(isOddOrEven('Hi'), 'even');
    });

    it('should return odd', () => {
        assert.equal(isOddOrEven('Hello'), 'odd');
    });

});

// Каквото RETURN-ва във ФУНКЦИЯТА, такова ТРЯБВА да имаме като ПРОВЕРКА в  FILENAME.test.js
/*

We can see there are three outcomes for the function:
•	Returning undefined
•	Returning "even"
•	Returning "odd"
Write one or two tests passing parameters that are NOT of type string to the function and expecting it to return undefined.
After we have checked the validation it's time to check whether the function works correctly with valid arguments. Write a test for each of the cases:
-	One where we pass a string with even length;
-	And one where we pass a string with an odd length;
Finally, make an extra test passing multiple different strings in a row to ensure the function works correctly.

*/
