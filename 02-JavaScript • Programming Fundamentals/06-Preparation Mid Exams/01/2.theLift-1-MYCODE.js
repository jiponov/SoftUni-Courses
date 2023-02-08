function theLift(input) {          // 100/100

    let people = Number(input.shift());
    let lift = input[0].split(' ').map(Number);
    let finalState = [];

    while (lift[0] != undefined) {
        let currentWagon = lift.shift();
        let freeWagonSpaces = 4 - currentWagon;

        if (people >= 0) {
            if (freeWagonSpaces >= 0) {
                if (people >= freeWagonSpaces) {
                    people -= freeWagonSpaces;
                    currentWagon += freeWagonSpaces;
                    finalState.push(currentWagon);
                } else {
                    currentWagon += people;
                    people -= people;
                    finalState.push(currentWagon);
                }
            }
        }
    }


    let emptySpots = finalState.some(el => el < 4);
    if (people <= 0 && emptySpots) {
        console.log(`The lift has empty spots!
${finalState.join(' ')}`);
    }


    let noAvailableSpace = finalState.every(el => el == 4);
    if (people > 0 && noAvailableSpace) {
        console.log(`There isn't enough space! ${people} people in a queue!
${finalState.join(' ')}`);
    }


    if (people <= 0 && noAvailableSpace) {
        console.log(`${finalState.join(' ')}`);
    }
}

theLift([
    "15",
    "0 0 0 0"
]);
console.log('-------');
theLift([
    "20",
    "0 2 0"
]);
console.log('-------');
theLift([
    "5",
    "0 0 4"
]);
console.log('-------');
theLift([
    "15",
    "0 0 0 1"
]);




