// 100/100 my code
class SmartHike {
    constructor(username) {
        this.username = username;
        this.goals = {};
        this.listOfHikes = [];
        this.resources = 100;
    }

    addGoal(peak, altitude) {
        if (this.goals.hasOwnProperty(peak)) {
            return `${peak} has already been added to your goals`;
        } else {
            this.goals[peak] = altitude;
            return `You have successfully added a new goal - ${peak}`;
        }
    }

    hike(peak, time, difficultyLevel) {
        if (!this.goals.hasOwnProperty(peak)) {
            throw new Error(`${peak} is not in your current goals`);
        } else {
            if (this.resources == 0) {
                throw new Error("You don't have enough resources to start the hike");
            }
        }

        let diff = this.resources - (time * 10);
        if (diff < 0) {
            return "You don't have enough resources to complete the hike";
        } else {
            this.resources -= time * 10;
            let obj = {
                peak: peak,
                time: time,
                difficultyLevel: difficultyLevel
            }
            this.listOfHikes.push(obj);
            return `You hiked ${peak} peak for ${time} hours and you have ${this.resources}% resources left`;
        }
    }

    rest(time) {
        let gainedResources = time * 10;
        this.resources += time * 10;
        if (this.resources >= 100) {
            this.resources = 100;
            return `Your resources are fully recharged. Time for hiking!`;
        } else {
            return `You have rested for ${time} hours and gained ${gainedResources}% resources`;
        }
    }

    showRecord(criteria) {
        if (this.listOfHikes.length == 0) {
            return `${this.username} has not done any hiking yet`;
        }

        if (criteria == 'easy' || criteria == 'hard') {
            this.listOfHikes.sort((a, b) => a.time - b.time)
            let bestHike = this.listOfHikes.find(x => x.difficultyLevel == criteria);
            if (bestHike) {
                return `${this.username}'s best ${criteria} hike is ${bestHike.peak} peak, for ${bestHike.time} hours`;
            }
            if (!bestHike) {
                return `${this.username} has not done any ${criteria} hiking yet`;
            }
        }

        if (criteria == 'all') {
            let output = [];
            output.push("All hiking records:");
            this.listOfHikes.forEach((x) => output.push(`${this.username} hiked ${x.peak} for ${x.time} hours`));
            return output.join('\n');

        }
    }
}

// INPUT 1: test for addGoal()
// const user = new SmartHike('Vili');
// console.log(user.addGoal('Musala', 2925));
// console.log(user.addGoal('Rui', 1706));
// console.log(user.addGoal('Musala', 2925));

// OUTPUT 1:
// You have successfully added a new goal - Musala
// You have successfully added a new goal - Rui
// Musala has already been added to your goals



// INPUT 2: test for addGoal() + hike()
// const user = new SmartHike('Vili');
// console.log(user.addGoal('Musala', 2925));
// console.log(user.addGoal('Rui', 1706));
// console.log(user.hike('Musala', 8, 'hard'));
// console.log(user.hike('Rui', 3, 'easy'));
// console.log(user.hike('Everest', 12, 'hard'));

// OUTPUT 2:
// You have successfully added a new goal - Musala
// You have successfully added a new goal - Rui
// You hiked Musala peak for 8 hours and you have 20% resources left
// You don't have enough resources to complete the hike
// Uncaught Error: Everest is not in your current goals



// INPUT 3: test for addGoal() + hike() + rest()
// const user = new SmartHike('Vili');
// console.log(user.addGoal('Musala', 2925));
// console.log(user.hike('Musala', 8, 'hard'));
// console.log(user.rest(4));
// console.log(user.rest(5));

// OUTPUT 3:
// You have successfully added a new goal - Musala
// You hiked Musala peak for 8 hours and you have 20% resources left
// You have rested for 4 hours and gained 40% resources
// Your resources are fully recharged. Time for hiking!



// INPUT 4: test for addGoal() + hike() + rest() + showRecord()
// const user = new SmartHike('Vili');
// console.log(user.showRecord('all'));
// OUTPUT 4:
// Vili has not done any hiking yet



// INPUT 5: test for addGoal() + hike() + rest() + showRecord()
const user = new SmartHike('Vili');
user.addGoal('Musala', 2925);
user.hike('Musala', 8, 'hard');
console.log(user.showRecord('easy'));
user.addGoal('Vihren', 2914);
user.hike('Vihren', 4, 'hard');
console.log(user.showRecord('hard'));
user.addGoal('Rui', 1706);
user.hike('Rui', 3, 'easy');
console.log(user.showRecord('all'));

// OUTPUT 5: test for addGoal() + hike() + rest() + showRecord()
// Vili has not done any easy hiking yet
// Vili's best hard hike is Musala peak, for 8 hours
// All hiking records:
// Vili hiked Musala for 8 hours

/*
console.log(user)   from input 5.
SmartHike {
    username: 'Vili',
    goals: { Musala: 2925, Vihren: 2914, Rui: 1706 },
    listOfHikes: [ { peak: 'Musala', time: 8, difficultyLevel: 'hard' } ],
    resources: 20
  }
*/


