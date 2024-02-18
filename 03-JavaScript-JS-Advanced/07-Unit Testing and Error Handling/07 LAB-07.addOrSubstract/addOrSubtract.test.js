const createCalculator = require('./addOrSubtract.js');
const expect = require('chai').expect;


describe('addSubtact', () => {          // 100/100

    it('get works', () => {
        const calculator = createCalculator();
        expect(calculator.get()).to.be.equal(0);
    });

    it('add works', () => {
        const calculator = createCalculator();
        calculator.add(1);
        expect(calculator.get()).to.be.equal(1);
    });

    it('subtract works', () => {
        const calculator = createCalculator();
        calculator.subtract(1);
        expect(calculator.get()).to.be.equal(-1);
    });

    it('add return NaN with invalid params', () => {
        const calculator = createCalculator();
        calculator.add('a');
        expect(calculator.get()).to.be.NaN;
    });

    it('subtract return NaN with invalid params', () => {
        const calculator = createCalculator();
        calculator.subtract('a');
        expect(calculator.get()).to.be.NaN;
    });
});