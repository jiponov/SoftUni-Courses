const mathEnforcer = require('./mathEnforcer.js');
const assert = require('chai').assert;

// 100/100
describe('mathEnforcer', () => {

    describe('addFive', () => {

        it('With string should return undefined', () => {
            assert.equal(mathEnforcer.addFive('checkstring'), undefined);
        });
        it('With object should return undefined', () => {
            assert.equal(mathEnforcer.addFive({ name: 'Lubo' }), undefined);
        });
        it('With array should return undefined', () => {
            assert.equal(mathEnforcer.addFive([10, 20, 30]), undefined);
        });
        it('With empty string should return undefined', () => {
            assert.equal(mathEnforcer.addFive(''), undefined);
        });

        it('With undefined should return undefined', () => {
            assert.equal(mathEnforcer.addFive(undefined), undefined);
        });

        it('With null should return undefined', () => {
            assert.equal(mathEnforcer.addFive(null), undefined);
        });

        it('if it is number - result accurate', () => {
            assert.equal(mathEnforcer.addFive(5), 10);
        });

        it('if it is number - result accurate', () => {
            assert.equal(mathEnforcer.addFive(0), 5);
        });
        it('if it is number - result accurate', () => {
            assert.equal(mathEnforcer.addFive(-5), 0);
        });
        it('if it is number - result accurate', () => {
            assert.equal(mathEnforcer.addFive(-8.5), -3.5);
        });
        it('if it is number - result accurate', () => {
            assert.closeTo(mathEnforcer.addFive(-5.1), -0.1, 0.1);
        });
    });


    describe('subtractTen', () => {

        it('if string should return undefined', () => {
            assert.equal(mathEnforcer.subtractTen('testit'), undefined);
        });

        it('if object should return undefined', () => {
            assert.equal(mathEnforcer.subtractTen({}), undefined);
        });

        it('if array should return undefined', () => {
            assert.equal(mathEnforcer.subtractTen(['love']), undefined);
        });

        it('if false should return undefined', () => {
            assert.equal(mathEnforcer.subtractTen(false), undefined);
        });

        it('should return result', () => {
            assert.equal(mathEnforcer.subtractTen(5), -5);
        });

        it('should return result', () => {
            assert.equal(mathEnforcer.subtractTen(10), 0);
        });
        it('should return result', () => {
            assert.equal(mathEnforcer.subtractTen(-10), -20);
        });
        it('should return result', () => {
            assert.equal(mathEnforcer.subtractTen(4.5), -5.5);
        });
        it('should return result', () => {
            assert.equal(mathEnforcer.subtractTen(-9.8), -19.8);
        });
        it('should return result', () => {
            assert.equal(mathEnforcer.subtractTen(-9.9), -19.9);
        });
    });


    describe('sum', () => {

        it('if params are not numbers both should return undefined', () => {
            assert.equal(mathEnforcer.sum('gamechanger', [10]), undefined);
        });
        it('if one of params is not number should return undefined', () => {
            assert.equal(mathEnforcer.sum(5, [10]), undefined);
        });
        it('if one of params is not number should return undefined', () => {
            assert.equal(mathEnforcer.sum({ name: 'Lubo' }, 5), undefined);
        });
        it('num1 + num2 = result', () => {
            assert.equal(mathEnforcer.sum(5, 5), 10);
            assert.equal(mathEnforcer.sum(5, 11), 16);
            assert.equal(mathEnforcer.sum(-5, -5), -10);
            assert.equal(mathEnforcer.sum(-5.5, 4.5), -1);
            assert.closeTo(mathEnforcer.sum(6.1, 6.2), 12.3, 0.1);
        });
    });
});





