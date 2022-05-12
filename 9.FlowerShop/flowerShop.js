const { expect } = require('chai');
const {describe} = require("mocha");
const {assert} = require('chai');


const flowerShop = {
    calcPriceOfFlowers(flower, price, quantity) {
        if (typeof flower != 'string' || !Number.isInteger(price) || !Number.isInteger(quantity)) {
            throw new Error('Invalid input!');
        } else {
            let result = price * quantity;
            return `You need $${result.toFixed(2)} to buy ${flower}!`;
        }
    },
    checkFlowersAvailable(flower, gardenArr) {
        if (gardenArr.indexOf(flower) >= 0) {
            return `The ${flower} are available!`;
        } else {
            return `The ${flower} are sold! You need to purchase more!`;
        }
    },
    sellFlowers(gardenArr, space) {
        let shop = [];
        let i = 0;
        if (!Array.isArray(gardenArr) || !Number.isInteger(space) || space < 0 || space >= gardenArr.length) {
            throw new Error('Invalid input!');
        } else {
            while (gardenArr.length > i) {
                if (i != space) {
                    shop.push(gardenArr[i]);
                }
                i++
            }
        }
        return shop.join(' / ');
    }
}

describe('firstTest', ()=>{
    describe('should throw invalid input', ()=>{
        it('should throw invalid input', ()=>{

            expect(()=>{
                flowerShop.calcPriceOfFlowers(12, 'string', 'string').to.throw("Invalid input!");
            });

            expect(()=>{
                flowerShop.calcPriceOfFlowers({}, [], 'string').to.throw("Invalid input!");
            });
            expect(()=>{
                flowerShop.calcPriceOfFlowers(123, 'string', {}).to.throw("Invalid input!");
            });
            assert(()=>{
                flowerShop.calcPriceOfFlowers(123,'string', {}).to.throw("Invalid input!");
            });
            assert(()=>{
                flowerShop.calcPriceOfFlowers({},[], 'string').to.throw("Invalid input!");
            });
            assert(()=>{
                flowerShop.calcPriceOfFlowers({},[], "").to.throw("Invalid input!");
            });
            assert(flowerShop.calcPriceOfFlowers(123, 'string', 'string'),"Invalid input!" );
            assert(flowerShop.calcPriceOfFlowers(123, {}, []),"Invalid input!" );
            assert(flowerShop.calcPriceOfFlowers(123, [], 'string'),"Invalid input!" );
            assert(flowerShop.calcPriceOfFlowers([], [], 'string'),"Invalid input!" );
            assert(flowerShop.calcPriceOfFlowers(123, 1, 1),"Invalid input!" );
            assert(flowerShop.calcPriceOfFlowers("roze", [], 1),"Invalid input!" );
            assert(flowerShop.calcPriceOfFlowers("roze", 1, {}),"Invalid input!" );
            assert(flowerShop.calcPriceOfFlowers("roze", 1, []),"Invalid input!" );
            assert(flowerShop.calcPriceOfFlowers("roze", "", 1),"Invalid input!" );

        });
        it('should return price * quantity', ()=>{
            let result = 20 * 2;
            let result1 = 10 * 2;
            let result2 = 40 * 2;
            expect(()=>{
                flowerShop.calcPriceOfFlowers('Roze', 10, 1).to.equal("You need $10.00 to buy Roze!");
            });
            expect(()=>{
                flowerShop.calcPriceOfFlowers('Roze', 10, 2).to.equal("You need $20.00 to buy Roze!");
            });
            assert(flowerShop.calcPriceOfFlowers('A', 20,2),`You need ${result} to buy A!`);
            assert(flowerShop.calcPriceOfFlowers('A', 10,2),`You need ${result1} to buy A!`);
            assert(flowerShop.calcPriceOfFlowers('A', 40,2),`You need ${result2} to buy A!`);
            assert(flowerShop.calcPriceOfFlowers('A', 40,2),`You need ${result2} to buy A!`);
            assert(flowerShop.calcPriceOfFlowers('A', 40,2),`You need ${result2} to buy A!`);
            assert(flowerShop.calcPriceOfFlowers('A', 40,2),`You need ${result2} to buy A!`);


        })
    });
    describe('check flowers available',()=>{
        it('should return available flower', ()=>{
            expect(()=>{
                flowerShop.checkFlowersAvailable('Roze', 1).to.equal("The Roze are available!")
            })
            expect(()=>{
                flowerShop.checkFlowersAvailable('Ume', 10).to.equal("The Roze are available!")
            })
            assert(flowerShop.checkFlowersAvailable('Roze', 10),"The Roze are available!");
            assert(flowerShop.checkFlowersAvailable('Roze', 1),"The Roze are available!");
            assert(flowerShop.checkFlowersAvailable('Roze', 30),"The Roze are available!");
            assert(flowerShop.checkFlowersAvailable(['Roze', 'Ume'], 30),"The Roze are available!");
            assert(flowerShop.checkFlowersAvailable(['Roze', 'Ume', 'Asd'], 4),"The Roze are available!");
            assert(flowerShop.checkFlowersAvailable(['Roze', 'Ume', 'Asd'], 4),"The Roze are available!");

        })
        it('should return sold flower', ()=>{
            expect(()=>{
                flowerShop.checkFlowersAvailable("Roze", -1).to.equal("The Roze are sold! You need to purchase more!");
            })
            assert(flowerShop.checkFlowersAvailable("Roze", -1), "The Roze are sold! You need to purchase more!");
            assert(flowerShop.checkFlowersAvailable("Roze", 'string'), "The Roze are sold! You need to purchase more!");
            assert(flowerShop.checkFlowersAvailable("Roze", ""), "The Roze are sold! You need to purchase more!");
            assert(flowerShop.checkFlowersAvailable("Roze", []), "The Roze are sold! You need to purchase more!");
            assert(flowerShop.checkFlowersAvailable("Roze", 0), "The Roze are sold! You need to purchase more!");
            assert(flowerShop.checkFlowersAvailable(['Raze'], 0), "The Roze are sold! You need to purchase more!");
            assert(flowerShop.checkFlowersAvailable(['Raze', 'Asd'], 0), "The Roze are sold! You need to purchase more!");
            assert(flowerShop.checkFlowersAvailable(['Raze', 'Asd', 'asd'], -1), "The Roze are sold! You need to purchase more!");
            assert(flowerShop.checkFlowersAvailable("Roze", 0), "The Roze are sold! You need to purchase more!");
            expect(()=>{
                flowerShop.checkFlowersAvailable("Roze", 'string').to.equal("The Roze are sold! You need to purchase more!");
            })
            expect(()=>{
                flowerShop.checkFlowersAvailable("Roze", '').to.equal("The Roze are sold! You need to purchase more!");
            })
            expect(()=>{
                flowerShop.checkFlowersAvailable("Roze", {}).to.equal("The Roze are sold! You need to purchase more!");
            })
            expect(()=>{
                flowerShop.checkFlowersAvailable("Roze", []).to.equal("The Roze are sold! You need to purchase more!");
            })
        })
    })
    describe('sell flowers', ()=>{
        it('should ', ()=>{
            //expect(flowerShop.sellFlowers('string', 'string')).to.throw('Invalid input!')
            expect(()=>{
                flowerShop.sellFlowers('string', 'string').to.throw('Invalid input!')
            });
            expect(()=>{
                flowerShop.sellFlowers(1, 3).to.throw('Invalid input!')
            });
            assert(()=>{
                flowerShop.sellFlowers(1,3).to.throw("Invalid input!")
            })
            assert(flowerShop.sellFlowers('string', 'string'),'Invalid input!');
            // assertEqual(flowerShop.sellFlowers(1, 4),'Invalid input!');
            // assertEqual(flowerShop.sellFlowers('string', {}),'Invalid input!');
        });
    });
    describe('a', ()=>{
        it('should', ()=>{
            //expect(flowerShop.sellFlowers(['asd', 'asd', 'asd'],3)).equal(['asd' / 'asd' / 'asd'])
            expect(()=>[
                flowerShop.sellFlowers(['asd','asd', 'asd',3]).to.equal['asd' / 'asd' / 'asd']
            ])
        })
    })
});
