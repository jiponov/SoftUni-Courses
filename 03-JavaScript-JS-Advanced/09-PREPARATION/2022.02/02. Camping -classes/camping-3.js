class SummerCamp {          // 100/100
    constructor(organizer, location) {
        this.organizer = organizer;
        this.location = location;
        this.priceForTheCamp = { 'child': 150, 'student': 300, 'collegian': 500 };
        this.listOfParticipants = [];
    }

    registerParticipant(name, condition, money) {
        if (!this.priceForTheCamp[condition]) {
            throw new Error('Unsuccessful registration at the camp.');
        }
        if (this.listOfParticipants.find(p => p.name === name)) {
            return `The ${name} is already registered at the camp.`;
        }
        if (money < this.priceForTheCamp[condition]) {
            return 'The money is not enough to pay the stay at the camp.';
        }
        this.listOfParticipants.push({ name, condition, power: 100, wins: 0 });
        return `The ${name} was successfully registered.`;
    }

    unregisterParticipant(name) {
        const participantIndex = this.listOfParticipants.findIndex(p => p.name === name);
        if (participantIndex === -1) {
            throw new Error(`The ${name} is not registered in the camp.`);
        }
        this.listOfParticipants.splice(participantIndex, 1);
        return `The ${name} removed successfully.`;
    }

    timeToPlay(typeOfGame, participant1, participant2) {
        const first = this.listOfParticipants.find(p => p.name === participant1);

        if (typeOfGame === 'WaterBalloonFights') {
            const second = this.listOfParticipants.find(p => p.name === participant2);
            if (!first || !second) {
                throw new Error('Invalid entered name/s.');
            }
            if (first.condition !== second.condition) {
                throw new Error('Choose players with equal condition.');
            }
            if (first.power > second.power) {
                first.wins++;
                return `The ${participant1} is winner in the game ${typeOfGame}.`;
            } else if (second.power > first.power) {
                second.wins++;
                return `The ${participant2} is winner in the game ${typeOfGame}.`;
            }
        } else if (typeOfGame === 'Battleship') {
            if (!first) {
                throw new Error('Invalid entered name/s.');
            }
            first.power += 20;
            return `The ${participant1} successfully completed the game ${typeOfGame}.`;
        }

        return 'There is no winner.';
    }

    toString() {
        const sorted = this.listOfParticipants
            .sort((a, b) => b.wins - a.wins)
            .map(p => `${p.name} - ${p.condition} - ${p.power} - ${p.wins}`)
            .join('\n');

        return [
            `${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}`,
            sorted
        ].join('\n');
    }
}