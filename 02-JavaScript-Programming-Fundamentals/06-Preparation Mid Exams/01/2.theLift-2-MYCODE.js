function theLift(input) {           // 100/100
    let waitingPeople = Number(input.shift());                              // 20
    let state = input.shift().split(' ').map(Number);                       // 0 2 0

    let wagonMax = 4;
    let capacity = 0;
    let currentWagon = 0;

    let result = [];

    while (state[0] != undefined) {                                         // while (state.length > 0)
        currentWagon = Number(state.shift());                               // 0 2 0    

        if ((waitingPeople < wagonMax) && (currentWagon == 0)) {
            capacity = waitingPeople - currentWagon
        } else if ((waitingPeople + currentWagon) < wagonMax) {
            capacity = waitingPeople;
        } else {
            capacity = wagonMax - currentWagon;                             // 4 2 4
        }

        currentWagon += capacity;                                           // 4 4 4
        waitingPeople -= capacity;                                          // 16 14 10
        result.push(currentWagon);
    }


    if (waitingPeople == 0 && currentWagon == wagonMax) {
        console.log(`${result.join(' ')}`);

    } else if (waitingPeople == 0) {
        console.log(`The lift has empty spots!`)
        console.log(`${result.join(' ')}`);

    } else {
        console.log(`There isn't enough space! ${waitingPeople} people in a queue!`);
        console.log(`${result.join(' ')}`);
    }
}

theLift([
    "15",
    "0 0 0 0"
]);

console.log('----------------------------------------------------------------------------');

theLift([
    "20",
    "0 2 0"
]);

console.log('----------------------------------------------------------------------------');

theLift([
    "5",
    "0 0 4"
]);

console.log('----------------------------------------------------------------------------');

theLift([
    "15",
    "0 0 0 1"
]);