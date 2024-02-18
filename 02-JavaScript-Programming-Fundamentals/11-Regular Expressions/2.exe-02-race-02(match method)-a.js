function furniture(input) {     // 100/100    
    'use strict'
    const participants = input.shift().split(', ');
    const collection = {};

    let patternName = /(?<name>[A-Za-z]+)/g;
    let patternDigits = /(?<sum>\d+)/g;

    let text = input.shift();
    
    while (text != 'end of race') {
        let matchName = text.match(patternName).join('');
        let matchDigits = text.match(patternDigits).join('').split('').map(Number).reduce((a, v) => a + v, 0);
        //console.log(matchName, matchDigits);

        if (participants.includes(matchName)) {
            if (!collection.hasOwnProperty(matchName)) {
                collection[matchName] = {};
                collection[matchName] = 0;
            }
            collection[matchName] += matchDigits;
        }

        text = input.shift();
    }
    //console.log(collection)

    let result = [];
    let output = Object
        .entries(collection)
        .sort((a, b) => b[1] - a[1])
        .splice(0, 3)
        .forEach(el => result.push(el[0]))


    console.log(`1st place: ${result[0]}
2nd place: ${result[1]}
3rd place: ${result[2]}`);
}

furniture([
    'George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@ ',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race'
]);
console.log('-------');
furniture([
    'Ronald, Bill, Tom, Timmy, Maggie, Michonne',
    'Mi*&^%$ch123o!#$%#nne787) ',
    '%$$B(*&&)i89ll)*&) ',
    'R**(on%^&ald992) ',
    'T(*^^%immy77) ',
    'Ma10**$#g0g0g0i0e',
    'end of race'
]);

