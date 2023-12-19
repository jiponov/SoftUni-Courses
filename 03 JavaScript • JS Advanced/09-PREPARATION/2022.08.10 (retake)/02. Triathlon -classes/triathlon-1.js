// my code 100/100
class Triathlon {

    constructor(competitionName) {                      // At the initialization of the Triathlon class - the constructor accepts only competitionName 
        this.competitionName = competitionName;         // a string
        this.participants = {};                         // an empty object
        this.listOfFinalists = [];                      // an empty array 
    }

    addParticipant(participantName, participantGender) {
        if (this.participants.hasOwnProperty(participantName)) {
            return `${participantName} has already been added to the list`;
        }

        this.participants[participantName] = participantGender;
        return `A new participant has been added - ${participantName}`;
    }

    completeness(participantName, condition) {
        if (!this.participants.hasOwnProperty(participantName)) {                  // !this.participants[participantName]
            throw new Error(`${participantName} is not in the current participants list`);
        }

        if (condition < 30) {
            throw new Error(`${participantName} is not well prepared and cannot finish any discipline`);
        }

        let counter = Math.floor(condition / 30);
        if (counter < 3) {
            return `${participantName} could only complete ${counter} of the disciplines`
        } else {
            let obj = {
                participantName: participantName,
                participantGender: this.participants[participantName]
            }

            this.listOfFinalists.push(obj)
            delete this.participants[participantName];
            return `Congratulations, ${participantName} finished the whole competition`;
        }
    }

    rewarding(participantName) {
        let participant = this.listOfFinalists.find((x) => x.participantName == participantName);

        if (!participant) {
            return `${participantName} is not in the current finalists list`;
        } else {
            return `${participantName} was rewarded with a trophy for his performance`;
        }
    }

    showRecord(criteria) {
        if (this.listOfFinalists.length == 0) {                   // !this.listOfFinalists
            return `There are no finalists in this competition`;
        }

        if (criteria == 'male') {
            if (this.listOfFinalists.every(x => x.participantGender != criteria)) {
                return `There are no ${criteria}'s that finished the competition`;
            }
        } else if (criteria == 'female') {
            if (this.listOfFinalists.every(x => x.participantGender != criteria)) {
                return `There are no ${criteria}'s that finished the competition`;
            }
        }

        let participant = this.listOfFinalists.find((x) => x.participantGender == criteria);
        if (participant) {
            return `${participant.participantName} is the first ${criteria} that finished the ${this.competitionName} triathlon`
        }

        let output = [];
        output.push(`List of all ${this.competitionName} finalists:`);
        this.listOfFinalists
            .sort((a, b) => a.participantName.localeCompare(b.participantName))
            .forEach((x) => output.push(x.participantName));
            console.log(this.listOfFinalists)
        if (criteria == 'all' && output.length > 0) {
            return output.join('\n');
        }        
    }
}

// INPUT - 1: (REVEAL FROM HERE)  =>  test for addParticipant()
// const contest = new Triathlon("Dynamos");
// console.log(contest.participants);

// console.log(contest.addParticipant("Peter", "male"));
// console.log(contest.addParticipant("Sasha", "female"));
// console.log(contest.addParticipant("Peter", "male"));

// console.log('-----');
// console.log(contest.participants);

// OUTPUT - 1:
// A new participant has been added - Peter
// A new participant has been added - Sasha
// Peter has already been added to the list



// INPUT - 2: test for addParticipant() + completeness()
// const contest = new Triathlon("Dynamos");
// console.log(contest.addParticipant("Peter", "male"));
// console.log(contest.addParticipant("Sasha", "female"));
// console.log(contest.addParticipant("George", "male"));
// console.log(contest.completeness("Peter", 100));
// console.log(contest.completeness("Sasha", 70));
// console.log(contest.completeness("George", 20));

// OUTPUT - 2:
// A new participant has been added - Peter
// A new participant has been added - Sasha
// A new participant has been added - George
// Congratulations, Peter finished the whole competition
// Sasha could only complete 2 of the disciplines
// Uncaught Error: George is not well prepared and cannot finish any discipline



// INPUT - 3: test for addParticipant() + completeness() + rewarding()
// const contest = new Triathlon("Dynamos");
// console.log(contest.addParticipant("Peter", "male"));
// console.log(contest.addParticipant("Sasha", "female"));
// console.log(contest.completeness("Peter", 100));
// console.log(contest.completeness("Sasha", 70));
// console.log(contest.rewarding("Peter"));
// console.log(contest.rewarding("Sasha"));

// OUTPUT - 3:
// A new participant has been added - Peter
// A new participant has been added - Sasha
// Congratulations, Peter finished the whole competition
// Sasha could only complete 2 of the disciplines
// Peter was rewarded with a trophy for his performance
// Sasha is not in the current finalists list



// INPUT - 4,5: test for addParticipant() + completeness() + rewarding() + showRecord()
const contest = new Triathlon("Dynamos");
console.log(contest.showRecord("all"));
console.log('-----');
console.log(contest.addParticipant("Peter", "male"));
console.log(contest.addParticipant("Sasha", "female"));
console.log(contest.completeness("Peter", 100));
console.log(contest.completeness("Sasha", 90));
console.log(contest.rewarding("Peter"));
console.log(contest.rewarding("Sasha"));
console.log(contest.showRecord("all"));


// OUTPUT - 4,5:
// There are no finalists in this competition
// --------------------------------------
// A new participant has been added - Peter
// A new participant has been added - Sasha
// Congratulations, Peter finished the whole competition
// Congratulations, Sasha finished the whole competition
// Peter was rewarded with a trophy for his performance
// Sasha was rewarded with a trophy for his performance
// List of all Dynamos finalists:
// Peter
// Sasha



// INPUT - 6: test for addParticipant() + completeness() + rewarding() + showRecord()
// const contest = new Triathlon("Dynamos");
// console.log(contest.addParticipant("Peter", "male"));
// console.log(contest.addParticipant("Sasha", "female"));
// console.log(contest.addParticipant("George", "male"));
// console.log(contest.completeness("Peter", 100));
// console.log(contest.completeness("Sasha", 90));
// console.log(contest.completeness("George", 95));
// console.log(contest.rewarding("Peter"));
// console.log(contest.rewarding("Sasha"));
// console.log(contest.rewarding("George"));
// console.log(contest.showRecord("male"));

// OUTPUT - 6:
// A new participant has been added - Peter
// A new participant has been added - Sasha
// A new participant has been added - George
// Congratulations, Peter finished the whole competition
// Congratulations, Sasha finished the whole competition
// Congratulations, George finished the whole competition
// Peter was rewarded with a trophy for his performance
// Sasha was rewarded with a trophy for his performance
// George was rewarded with a trophy for his performance
// Peter is the first male that finished the Dynamos triathlon