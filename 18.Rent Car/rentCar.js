const {expect} = require('chai');
const {describe} = require("mocha");
const {assert} = require('chai');

const rentCar = {
    searchCar(shop, model) {
        let findModel = [];
        if (Array.isArray(shop) && typeof model == 'string') {
            for (let i = 0; i < shop.length; i++) {
                if (model === shop[i]) {
                    findModel.push(shop[i]);
                }
            }
            if (findModel.length !== 0) {
                return `There is ${findModel.length} car of model ${model} in the catalog!`;
            } else {
                throw new Error('There are no such models in the catalog!')
            }
        } else {
            throw new Error('Invalid input!')
        }
    },
    calculatePriceOfCar(model, days) {
        let catalogue = {
            Volkswagen: 20,
            Audi: 36,
            Toyota: 40,
            BMW: 45,
            Mercedes: 50
        };

        if (typeof model == 'string' && Number.isInteger(days)) {
            if (catalogue.hasOwnProperty(model)) {
                let cost = catalogue[model] * days;
                return `You choose ${model} and it will cost $${cost}!`
            } else {
                throw new Error('No such model in the catalog!')
            }
        } else {
            throw new Error('Invalid input!')
        }
    },
    checkBudget(costPerDay, days, budget) {
        if (!Number.isInteger(costPerDay) || !Number.isInteger(days) || !Number.isInteger(budget)) {
            throw new Error('Invalid input!');
        } else {
            let cost = costPerDay * days;
            if (cost <= budget) {
                return `You rent a car!`
            } else {
                return 'You need a bigger budget!'
            }
        }
    }
}

describe("method tests", () => {
    describe("first method test", () => {
        it("should return invalid input", () => {

            expect(() => {
                rentCar.searchCar('', {}).to.throw('Invalid input!');
            })
            assert.equal(rentCar.searchCar({},1), 'Invalid input!');
            assert.equal(rentCar.searchCar('',''), 'Invalid input!');
            assert.equal(rentCar.searchCar({},''), 'Invalid input!');
            assert.equal(rentCar.searchCar([],{}), 'Invalid input!');
            assert.equal(rentCar.searchCar(1,1), 'Invalid input!');

            expect(() => {
                rentCar.searchCar({}, 1).to.throw('Invalid input!');
            })
            expect(() => {
                rentCar.searchCar(1, []).to.throw('Invalid input!');
            })

            expect(()=>{
                rentCar.searchCar(["BMW"], "Audi").to.return('There are no such models in the catalog!')
            })

            assert.equal(rentCar.searchCar('',"Audi"),'There are no such models in the catalog!');
            assert.equal(rentCar.searchCar(["Opel", "Gaz"],"BMW"),'There are no such models in the catalog!');
            assert.equal(rentCar.searchCar([1,2],"Audi"),'There are no such models in the catalog!');
            assert.equal(rentCar.searchCar(["", ""],"BMW"),'There are no such models in the catalog!');
            expect(()=>{
                rentCar.searchCar({}, 1).to.return('There are no such models in the catalog!')
            })
            expect(()=>{
                rentCar.searchCar([1,2], ).to.return('There are no such models in the catalog!')
            })


        })


    })
    describe("should return non empty arr", ()=>{
        it("should return non empty array", ()=>{
            expect(()=>{
                rentCar.searchCar(Array(["Opel"]), String("Opel")).to.return(`There is 1 car of model Opel in the catalog!`)
            })
            expect(()=>{
                rentCar.searchCar(["BMW", "BMW"], "BMW").to.return(`There is 2 car of model BMW in the catalog!`)
            })
            assert.equal(rentCar.searchCar(["BMW", "BMW"],"BMW"),`There is 2 car of model BMW in the catalog!`);
            assert.equal(rentCar.searchCar(["Opel", ],"Opel"),`There is 1 car of model Opel in the catalog!`);
            assert.equal(rentCar.searchCar(["Opel", "BMW", "Opel"],"Opel"),`There is 2 car of model Opel in the catalog!`);
        })
    });
    describe('second method tests', ()=>{
        it("should return model and cost", ()=>{
            expect(()=>{
                rentCar.calculatePriceOfCar(String("Audi"), Number(36)).to.return(`You choose Audi and it will cost $1296!`)
            })
            expect(()=>{
                rentCar.calculatePriceOfCar(String("Audi"), Number(1)).to.return(`You choose Audi and it will cost $36!`)
            })
            expect(()=>{
                rentCar.calculatePriceOfCar(String("BMW"), Number(1)).to.return(`You choose Audi and it will cost $45!`)
            })
            assert.equal(rentCar.calculatePriceOfCar(String("Audi"), Number(1)),`You choose Audi and it will cost $36!`);
            assert.equal(rentCar.calculatePriceOfCar(String("Audi"), Number(36)),`You choose Audi and it will cost $1296!`);
            assert.equal(rentCar.calculatePriceOfCar(String("BMW"), Number(1)),`You choose Audi and it will cost $45!`);
        })
        it("should return no such model", ()=>{
            expect(()=>{
                rentCar.calculatePriceOfCar('', 0).to.return("Invalid input!")
            })
            expect(()=>{
                rentCar.calculatePriceOfCar([]).to.return("Invalid input!")
            })
            expect(()=>{
                rentCar.calculatePriceOfCar("").to.return("Invalid input!")
            })

        })
    })
})