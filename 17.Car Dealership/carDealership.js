class CarDealership {
        constructor(name) {
            this.name = name;
            this.availableCars = [];
            this.soldCars = [];
            this.totalIncome = 0;
        }

        addCar(model, horsepower, price, mileage){
            if(model === "" || Number(horsepower) < 0 || price <0|| mileage <0){
                throw new Error("Invalid input!");
            }
            let car = {model, horsepower, price, mileage};
            this.availableCars.push(car);
            return (`New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`)


        }
        sellCar(model, desiredMileage){
            if(this.availableCars.some(x=>x.model === model)){
                if(this.availableCars.mileage<=desiredMileage){
                      let price = this.availableCars.price;
                      let newCar = {model, desiredMileage, price};
                      this.availableCars.remove(newCar);
                      this.soldCars.push(newCar);
                      this.totalIncome+=price;
                      return `${model} was sold for ${price}$`;


                }
                if((this.availableCars.mileage < desiredMileage + 40000) ||
                this.availableCars.mileage === desiredMileage +40000){
                    let discount = this.availableCars.price *0.05;
                   let price = this.availableCars.price -=discount;
                    let newCar = {model, desiredMileage, price};
                    this.availableCars.remove(newCar);
                    this.soldCars.push(newCar);
                    this.totalIncome+=price;
                    return `${model} was sold for ${price}$`;

                }
                let difference = 40000;
                if(this.availableCars.mileage + difference > desiredMileage ||
                this.availableCars.mileage + difference <desiredMileage){
                    let discount = this.availableCars.price * 0.10;
                    let price = this.availableCars.price-= discount;
                    let newCar = {model, desiredMileage, price};
                    this.availableCars.remove(newCar);
                    this.soldCars.push(newCar);
                    this.totalIncome+=price;
                    return `${model} was sold for ${price}$`;
                }

            }else{
                throw new Error(`${model} was not found!`);
            }
        }
        currentCar(){
            let result = [];
            this.availableCars.forEach(x=>{
                result.push(`---${x.model} - ${x.horsepower} HP - ${x.mileage} km - ${x.price}$`);
            })
            return "-Available cars:" + result.join('\n');
        }

}
// let dealership = new CarDealership('SoftAuto');
// console.log(dealership.addCar('Toyota Corolla', 100, 3500, 190000));
// console.log(dealership.addCar('Mercedes C63', 300, 29000, 187000));
// //console.log(dealership.addCar('', 120, 4900, 240000));

let dealership = new CarDealership('SoftAuto');
dealership.addCar('Toyota Corolla', 100, 3500, 190000);
dealership.addCar('Mercedes C63', 300, 29000, 187000);
dealership.addCar('Audi A3', 120, 4900, 240000);
console.log(dealership.sellCar('Toyota Corolla', 230000));
console.log(dealership.sellCar('Mercedes C63', 110000));
