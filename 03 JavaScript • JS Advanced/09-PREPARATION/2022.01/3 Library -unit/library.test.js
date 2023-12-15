const library = require('./library-1.js');
const expect = require('chai').expect;

// 100/100
describe('library FUNCTION tests', () => {

    describe('calcPriceOfBook', () => {

        it('invalid input - name of the book', () => {
            expect(() => { library.calcPriceOfBook(2, 2) }).to.throw('Invalid input');          // You need to validate the input, if nameOfBook is not a string, or the year is not an integer number, throw an error: "Invalid input"
        });
        it('invalid input - name of the book', () => {
            expect(() => library.calcPriceOfBook(1, 1)).to.throw('Invalid input');          // You need to validate the input, if nameOfBook is not a string, or the year is not an integer number, throw an error: "Invalid input"
        });
        it('invalid input - year', () => {
            expect(() => library.calcPriceOfBook('1', '1')).to.throw('Invalid input');          // You need to validate the input, if nameOfBook is not a string, or the year is not an integer number, throw an error: "Invalid input"
        });
        it('valid date and year is below 1980', () => {
            expect(library.calcPriceOfBook('The Little Prince', 1943)).to.equal(`Price of The Little Prince is 10.00`);     //	The function calculated price of the book and return: `Price of {nameOfBook} is {price}`
        });
        it('valid date and year is equal 1980', () => {
            expect(library.calcPriceOfBook('The Little Prince', 1980)).to.equal(`Price of The Little Prince is 10.00`);     //	The function calculated price of the book and return: `Price of {nameOfBook} is {price}`
        });
        it('valid date and year greater than 1980', () => {
            expect(library.calcPriceOfBook('The Little Prince', 1990)).to.equal(`Price of The Little Prince is 20.00`);
        });

    });

    describe('findBook', () => {

        it('invalid input - empty array', () => {
            expect(() => library.findBook([], 'The little prince')).to.throw('No books currently available');
        });
        it('valid  input - book available', () => {
            expect(library.findBook(["Troy", "Life Style", "Torronto"], "Troy")).to.equal('We found the book you want.');
        });
        it('valid  input - book not available', () => {
            expect(library.findBook(["Troy", "Life Style", "Torronto"], "JAVASCRIPT is Awesome")).to.equal('The book you are looking for is not here!');
        });
    });

    describe('arrangeTheBooks', () => {

        it('invalid input - string', () => {
            expect(() => library.arrangeTheBooks('TEST')).to.throw('Invalid input');    //  throw new Error("Invalid input");
        });
        it('invalid input - negative number', () => {
            expect(() => library.arrangeTheBooks(-100)).to.throw('Invalid input');    //  throw new Error("Invalid input");
        });
        it('valid input - less than available space (39)', () => {
            expect(library.arrangeTheBooks(39)).to.equal('Great job, the books are arranged.');
        });
        it('valid input - equal to available space (40)', () => {
            expect(library.arrangeTheBooks(40)).to.equal('Great job, the books are arranged.');
        });
        it('valid input - bigger than the available space (45)', () => {
            expect(library.arrangeTheBooks(45)).to.equal('Insufficient space, more shelves need to be purchased.');
        });

    });

});