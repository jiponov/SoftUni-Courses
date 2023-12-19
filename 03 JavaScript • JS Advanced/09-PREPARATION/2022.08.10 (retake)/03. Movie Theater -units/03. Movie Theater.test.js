const movieTheater = require('./03. Movie Theater.js');
const assert = require('chai').assert;
const expect = require('chai').expect;

// 100/100 my code
describe('movieTheater FUNCTION tests', () => {

    describe('ageRestrictions', () => {
        it('movieRating type G to equal msg', () => {
            expect(movieTheater.ageRestrictions('G')).to.equal(`All ages admitted to watch the movie`);
        });

        it('movieRating type PG to equal msg', () => {
            expect(movieTheater.ageRestrictions('PG')).to.equal(`Parental guidance suggested! Some material may not be suitable for pre-teenagers`);
        });

        it('movieRating type R to equal msg', () => {
            expect(movieTheater.ageRestrictions('R')).to.equal(`Restricted! Under 17 requires accompanying parent or adult guardian`);
        });

        it('movieRating type NC-17 to equal msg', () => {
            expect(movieTheater.ageRestrictions('NC-17')).to.equal(`No one under 17 admitted to watch the movie`);
        });

        it('movieRating type default to equal msg', () => {
            expect(movieTheater.ageRestrictions(18)).to.equal(`There are no age restrictions for this movie`);
        });

        it('movieRating type default to equal msg', () => {
            expect(movieTheater.ageRestrictions(3)).to.equal(`There are no age restrictions for this movie`);
        });
    });

    describe('moneySpent', () => {
        it('total cost check - bill', () => {
            expect(movieTheater.moneySpent(3, [], [])).to.equal(`The total cost for the purchase is 45.00`);
        });

        it('two options for foods and drinks', () => {
            expect(movieTheater.moneySpent(2, ["Nachos", "Popcorn"], ["Soda", "Water"])).to.equal(`The total cost for the purchase is 44.50`);
        });

        it('two options for foods and drinks', () => {
            expect(movieTheater.moneySpent(5, ["Nachos", "Popcorn"], ["Soda", "Water"])).to.equal(`The total cost for the purchase with applied discount is 71.60`);
        });

        it('NOT number, array, array - error: "Invalid input"', () => {
            expect(() => { movieTheater.moneySpent('str', [], []) }).to.throw('Invalid input');
        });

        it('NOT number, array, array - error: "Invalid input"', () => {
            expect(() => { movieTheater.moneySpent(5, {}, []) }).to.throw('Invalid input');
        });

        it('NOT number, array, array - error: "Invalid input"', () => {
            expect(() => { movieTheater.moneySpent(10, [], 'str') }).to.throw('Invalid input');
        });
    });

    describe('reservation', () => {
        it('rowsArray check', () => {
            expect(movieTheater.reservation([{ rowNumber: 1, freeSeats: 7 }, { rowNumber: 2, freeSeats: 5 }], 7)).to.equal(1)
        });

        it('rowsArray check', () => {
            expect(movieTheater.reservation([{ rowNumber: 1, freeSeats: 7 }, { rowNumber: 2, freeSeats: 5 }], 2)).to.equal(2)
        });

        it('rowsArray check', () => {
            expect(movieTheater.reservation([{ rowNumber: 1, freeSeats: 7 }, { rowNumber: 2, freeSeats: 5 }], 0)).to.equal(2)
        });

        it('NOT array, number - error: "Invalid input"', () => {
            expect(() => { movieTheater.reservation('str', 5) }).to.throw('Invalid input');
        });

        it('NOT array, number - error: "Invalid input"', () => {
            expect(() => { movieTheater.reservation('[]', {}) }).to.throw('Invalid input');
        });
    });
});
