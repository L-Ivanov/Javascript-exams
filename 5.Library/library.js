// import {expect} from "chai";

const { expect } = require('chai');
const {describe} = require("mocha");
const library = {
    calcPriceOfBook(nameOfBook, year) {

        let price = 20;
        if (typeof nameOfBook != "string" || !Number.isInteger(year)) {
            throw new Error("Invalid input");
        } else if (year <= 1980) {
            let total = price - (price * 0.5);
            return `Price of ${nameOfBook} is ${total.toFixed(2)}`;
        }
        return `Price of ${nameOfBook} is ${price.toFixed(2)}`;
    },

    findBook: function(booksArr, desiredBook) {
        if (booksArr.length == 0) {
            throw new Error("No books currently available");
        } else if (booksArr.find(e => e == desiredBook)) {
            return "We found the book you want.";
        } else {
            return "The book you are looking for is not here!";
        }

    },
    arrangeTheBooks(countBooks) {
        const countShelves = 5;
        const availableSpace = countShelves * 8;

        if (!Number.isInteger(countBooks) || countBooks < 0) {
            throw new Error("Invalid input");
        } else if (availableSpace >= countBooks) {
            return "Great job, the books are arranged.";
        } else {
            return "Insufficient space, more shelves need to be purchased.";
        }
    }

};
describe('Library', ()=>{
    describe('calcPriceOfBook', ()=>{
        it('throws an error if invalid parameters', ()=>{
            expect(()=>{
                library.calcPriceOfBook('123', 123).to.throw('Invalid input')
            })
            expect(()=>{
                library.calcPriceOfBook('string', 'string').to.throw('Invalid input')
            })
            expect(()=>{
                library.calcPriceOfBook([], {}).to.throw('Invalid input')
            })
        })
        it('ad', ()=>{

            expect(library.calcPriceOfBook('Name', 1980)).to.equal('Price of Name is 10.00');
            expect(library.calcPriceOfBook('Name', 1930)).to.equal('Price of Name is 10.00');

        })

        it('return normal price', ()=>{
            expect(library.calcPriceOfBook('Name', 2000)).to.equal('Price of Name is 20.00');
            expect(library.calcPriceOfBook('Name', 1999)).to.equal('Price of Name is 20.00');
        })
    })
    describe('findBook', ()=>{
        it('should return error if no books', ()=>{
            expect(()=>{
                library.findBook([], 'book').to.throw('No books currently available')
            })
            expect(()=>{
                library.findBook('', 'book').to.throw('No books currently available')
            })
        })
        it('should return found', ()=>{

            expect(library.findBook(['book'], 'book')).to.equal('We found the book you want.')
            expect(library.findBook(['book', 'book2'], 'book2')).to.equal('We found the book you want.')

        });
        it('should return no book', ()=>{
           expect(()=>{
               library.findBook([], 'book').to.equal("The book you are looking for is not here!");
               library.findBook(['book2'], 'book').to.equal("The book you are looking for is not here!");
               library.findBook({}, 'book').to.equal("The book you are looking for is not here!");
           })
        })

    })
})

describe('Library Object Test Suit', () => {
    describe('calcPriceOfBook Function Test', () => {
        it('throws error if invalid parameters', () => {
            expect(() => {
                library.calcPriceOfBook(123, 123);
            }).to.throw('Invalid input');

            expect(() => {
                library.calcPriceOfBook('string', 'string');
            }).to.throw('Invalid input');

            expect(() => {
                library.calcPriceOfBook(123, 'string');
            }).to.throw('Invalid input');
        });

        it('returns message with 50% Off Price and Year LESS THAN 1980', () => {
            expect(library.calcPriceOfBook('Name', 1930)).to.equal(
                `Price of Name is 10.00`
            );
            expect(library.calcPriceOfBook('Name', 1940)).to.equal('Price of Name is 10.00');
        });

        it('returns message with 50% Off Price and Year EQUAL to 1980', () => {
            expect(library.calcPriceOfBook('Name', 1980)).to.equal(
                `Price of Name is 10.00`
            );
        });

        it('returns the normal price of book', () => {
            expect(library.calcPriceOfBook('NormalBook', 2001)).to.equal(
                'Price of NormalBook is 20.00'
            );
        });
    });
    describe('findBook function', () => {
        it('throws error if the parameter array is empty', () => {
            expect(() => {
                library.findBook([], 'book');
            }).to.throw('No books currently available');
        });

        it('throws error if the parameter is empty STRING', () => {
            expect(() => {
                library.findBook('', 'book');
            }).to.throw('No books currently available');
        });

        it('returns a message for FOUND book if its is in the books array', () => {
            expect(
                library.findBook(['Book', 'Book2', 'Book3'], 'Book')
            ).to.equal('We found the book you want.');
        });

        it('returns a message for NOT FOUND book if its NOT in books array', () => {
            expect(
                library.findBook(['Book', 'Book2', 'Book3'], 'Book4')
            ).to.equal('The book you are looking for is not here!');
        });
    });

    describe('arrangeBooks function', () => {
        it('throws error if parameter is invalid type', () => {
            expect(() => {
                library.arrangeTheBooks('string');
            }).to.throw('Invalid input');
        });

        it('throws error if parameter is LESS THAN 0', () => {
            expect(() => {
                library.arrangeTheBooks(-10);
            }).to.throw('Invalid input');
        });

        it('returns message for insufficient space', () => {
            expect(library.arrangeTheBooks(45)).to.equal(
                'Insufficient space, more shelves need to be purchased.'
            );
        });

        it('returns message that books are arranged if the books are LESS THAN Shelves(40)', () => {
            expect(library.arrangeTheBooks(23)).to.equal(
                'Great job, the books are arranged.'
            );
        });

        it('returns message that books are arranged if the books are EQUAL TO Shelves(40)', () => {
            expect(library.arrangeTheBooks(40)).to.equal(
                'Great job, the books are arranged.'
            );
        });
    });
});

