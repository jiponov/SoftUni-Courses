class SummerCamp {          // 90/100

    constructor(organizer, location) {
        this.organizer = organizer;
        this.location = location;
        this.priceForTheCamp = { "child": 150, "student": 300, "collegian": 500 };
        this.listOfParticipants = [];
    }


    registerParticipant(name, condition, money) {
        money = Number(money);
        let participant = this.listOfParticipants.find(x => x.name == name);


        if (!this.priceForTheCamp[condition]) {                                 // OR: if (this.priceForTheCamp[condition] == undefined) {
            throw new Error('Unsuccessful registration at the camp.');
        }

        if (participant) {                                                      // OR: if (this.listOfParticipants.some(x => x.name == name))
            return `The ${name} is already registered at the camp.`;
        }

        if (money < this.priceForTheCamp[condition]) {
            return `The money is not enough to pay the stay at the camp.`;
        }

        if (!participant) {

            let obj = {
                name: name,
                condition: condition,
                power: 100,
                wins: 0
            }
            //OR: obj.name = name;
            //OR: obj.condition = condition;            
            //console.log(summerCamp)
            this.listOfParticipants.push(obj);
            return `The ${name} was successfully registered.`;
        }
    }


    unregisterParticipant(name) {
        let participant = this.listOfParticipants.find(x => x.name == name);

        if (!participant) {
            throw new Error(`The ${name} is not registered in the camp.`);
        } else {
            //const participantIndex = this.listOfParticipants.findIndex(x => x.name == name);
            //this.listOfParticipants.splice(participantIndex, 1);
            this.listOfParticipants = this.listOfParticipants.filter(x => x.name != name);      // може и с splice и findIndex
            return `The ${name} removed successfully.`;
        }
    }


    timeToPlay(typeOfGame, participant1, participant2) {
        let p1 = this.listOfParticipants.find(x => x.name == participant1);
        let p2 = this.listOfParticipants.find(x => x.name == participant2);         // name(string) - optional

        if (typeOfGame == 'WaterBalloonFights') {
            if (p1.condition != p2.condition) {
                throw new Error('Choose players with equal condition.');
            }

            if (!p1 || !p2) {
                throw new Error('Invalid entered name/s.');
            }

            if (p1.power > p2.power) {
                p1.wins += 1;
                return `The ${participant1} is winner in the game ${typeOfGame}.`;
            } else if (p1.power < p2.power) {
                p2.wins += 1;
                return `The ${participant2} is winner in the game ${typeOfGame}.`;
            } else if (p1.power == p2.power) {
                return `There is no winner.`;
            }

        } else if (typeOfGame == 'Battleship') {
            if (!p1) {
                throw new Error('Invalid entered name/s.');
            }

            p1.power += 20;
            return `The ${participant1} successfully completed the game ${typeOfGame}.`;
        }
    }


    toString() {
        let output = [];

        output.push(`${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}`);

        this.listOfParticipants
            .sort((a, b) => b.wins - a.wins)
            .forEach(x => output.push(`${x.name} - ${x.condition} - ${x.power} - ${x.wins}`))

        return output.join('\n');
    }
}


// INPUT 1: check ----- registerParticipant()
// const summerCampEXAMPLE = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
// console.log(summerCampEXAMPLE.registerParticipant("Petar Petarson", "student", 200));
// console.log(summerCampEXAMPLE.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCampEXAMPLE.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCampEXAMPLE.registerParticipant("Leila Wolfe", "childd", 200));
//The money is not enough to pay the stay at the camp.
//The Petar Petarson was successfully registered.
//The Petar Petarson is already registered at the camp.
//Uncaught Error: Unsuccessful registration at the camp.


// INPUT 2: check ----- unregisterParticipant()
// const summerCampEXAMPLE = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
// console.log(summerCampEXAMPLE.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCampEXAMPLE.unregisterParticipant("Petar"));
// console.log(summerCampEXAMPLE.unregisterParticipant("Petar Petarson"));
//The Petar Petarson was successfully registered.
//Uncaught Error: The Petar is not registered in the camp.
//The Petar Petarson removed successfully.


// INPUT 3: check ----- timeToPlay()
// const summerCampEXAMPLE = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
// console.log(summerCampEXAMPLE.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCampEXAMPLE.timeToPlay("Battleship", "Petar Petarson"));
// console.log(summerCampEXAMPLE.registerParticipant("Sara Dickinson", "child", 200));
// console.log(summerCampEXAMPLE.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
// console.log(summerCampEXAMPLE.registerParticipant("Dimitur Kostov", "student", 300));
// console.log(summerCampEXAMPLE.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));
//The Petar Petarson was successfully registered.
//The Petar Petarson successfully completed the game Battleship.
//The Sara Dickinson was successfully registered.
//Uncaught Error: Choose players with equal condition.
//The Dimitur Kostov was successfully registered.
//The Petar Petarson is winner in the game WaterBalloonFights.


// INPUT 4: check ----- toString()
// const summerCampEXAMPLE = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
// console.log(summerCampEXAMPLE.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCampEXAMPLE.timeToPlay("Battleship", "Petar Petarson"));
// console.log(summerCampEXAMPLE.registerParticipant("Sara Dickinson", "child", 200));
// //console.log(summerCampEXAMPLE.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
// console.log(summerCampEXAMPLE.registerParticipant("Dimitur Kostov", "student", 300));
// console.log(summerCampEXAMPLE.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));
// console.log(summerCampEXAMPLE.toString());
//The Petar Petarson was successfully registered.
//The Petar Petarson successfully completed the game Battleship.
//The Sara Dickinson was successfully registered.
//Uncaught Error: Choose players with equal condition.
//The Dimitur Kostov was successfully registered.
//The Petar Petarson is winner in the game WaterBalloonFights.
//Jane Austen will take 3 participants on camping to Pancharevo Sofia 1137, Bulgaria
//Petar Petarson - student - 120 - 1
//Sara Dickinson - child - 100 - 0
//Dimitur Kostov - student - 100 - 0


/*

toString() {
        //console.log(this.listOfParticipants)
 
        let sortedArr = this.listOfParticipants.sort((a, b) => b.wins - a.wins);
        let mappedArr = sortedArr.map(x => `${ x.name } - ${ x.condition } - ${ x.power } - ${ x.wins }`);
        // sortAndMap.forEach(x => console.log(`${ x[1].name } - ${ x[1].condition } - ${ x[1].power } - ${ x[1].wins }`)); BECAUSE OF RETURN not like this...

        let output = [`${ this.organizer } will take ${ this.listOfParticipants.length } participants on camping to ${ this.location }`, mappedArr.join('\n')];

        return output.join('\n');
    }

    */