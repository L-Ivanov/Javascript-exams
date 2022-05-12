const { expect } = require('chai');
const {describe} = require("mocha");
const {assert} = require('chai');



const companyAdministration = {

    hiringEmployee(name, position, yearsExperience) {
        if (position == "Programmer") {
            if (yearsExperience >= 3) {
                return `${name} was successfully hired for the position ${position}.`;
            } else {
                return `${name} is not approved for this position.`;
            }
        }
        throw new Error(`We are not looking for workers for this position.`);
    },
    calculateSalary(hours) {

        let payPerHour = 15;
        let totalAmount = payPerHour * hours;

        if (typeof hours !== "number" || hours < 0) {
            throw new Error("Invalid hours");
        } else if (hours > 160) {
            totalAmount += 1000;
        }
        return totalAmount;
    },
    firedEmployee(employees, index) {

        let result = [];

        if (!Array.isArray(employees) || !Number.isInteger(index) || index < 0 || index >= employees.length) {
            throw new Error("Invalid input");
        }
        for (let i = 0; i < employees.length; i++) {
            if (i !== index) {
                result.push(employees[i]);
            }
        }
        return result.join(", ");
    }

}

describe("Should", ()=>{
    describe("should return success", ()=>{
        it("should return", ()=>{
            assert(companyAdministration.hiringEmployee("S", "Programmer", 4), "S was successfully hired for the position Programmer.");
            assert(companyAdministration.hiringEmployee("S", "Programmer", 3), "S was successfully hired for the position Programmer.");
            assert(companyAdministration.hiringEmployee("S", "Programmer", 120), "S was successfully hired for the position Programmer.");
        });
        it("should throw error", ()=>{
           // assert(companyAdministration.hiringEmployee("S", "Asd", 3), "We are not looking for workers for this position.");
            expect((companyAdministration.hiringEmployee("S","Asd", )).to.throw("We are not looking for workers for this position."));
            expect((companyAdministration.hiringEmployee("S","Asd",2 )).to.throw("We are not looking for workers for this position."));


        })
        it("should", ()=>{
            expect(()=>{
                companyAdministration.hiringEmployee("A", "Programmer", 2).to.return("A is not approved for this position.")
            })
            expect(()=>{
                companyAdministration.hiringEmployee("A", "Programmer", {}).to.return("A is not approved for this position.")
            })
            expect(()=>{
                companyAdministration.hiringEmployee("A", "Programmer", []).to.return("A is not approved for this position.")
            })
            expect(()=>{
                companyAdministration.hiringEmployee("A", "Programmer", '').to.return("A is not approved for this position.")
            })
            expect(()=>{
                companyAdministration.hiringEmployee("A", "Programmer", -10).to.return("A is not approved for this position.")
            })
        })
    })
    describe("its should return salary", ()=>{
        describe("return salary", ()=>{
            it("should throw new error if hours are not numbers", ()=>{
                expect(()=>{
                    companyAdministration.calculateSalary(-100).to.throw("Invalid hours");
                    companyAdministration.calculateSalary([]).to.throw("Invalid hours");
                    companyAdministration.calculateSalary("").to.throw("Invalid hours");
                    companyAdministration.calculateSalary("asd").to.throw("Invalid hours");
                })
            })
            it("it should return more salary", ()=>{
                expect(()=>{})

            })
        })
    })
})