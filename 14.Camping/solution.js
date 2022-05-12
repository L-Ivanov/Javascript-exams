class SummerCamp{
    constructor(organizer, location){
        this.organizer = organizer;
        this.location = location;
        this.priceForTheCamp = {"child": 150, "student": 300, "collegian": 500};
        this.listOfParticipant = [];

    }
    registerParticipant(name, condition, money){
        for (let cond of this.priceForTheCamp){
            if(cond !== condition){
                throw new Error("Unsuccessful registration at the camp.");
            }

        }
        if(this.listOfParticipant[name]){
            return `The ${name} is already registered at the camp.`;
        }
        if(money<150 || money<300 || money<500){
            throw new Error(`The money is not enough to pay the stay at the camp.`);

        }
        let participant = {name, condition, power:100, wins:0};
        this.listOfParticipant.push(participant);

    }
    unregisterParticipant(name){
        let indexOfParticipants = this.listOfParticipant.findIndex(x=>x.name === name);
        if(!this.listOfParticipant.some(x=>x.name === name)){
            throw new Error(`The ${name} is not registered in the camp.`);
        }
        this.listOfParticipant.splice(indexOfParticipants, 1);
        return `The ${name} removed successfully.`

    }
    timeToPlay(typeOfGame, participant1, participant2){

    }

}