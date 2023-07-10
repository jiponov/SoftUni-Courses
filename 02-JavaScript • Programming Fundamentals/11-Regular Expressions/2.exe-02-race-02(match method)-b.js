function furniture(input) {     // 100/100    
    'use strict'
    const participants = input.shift().split(', ');
    const collection = {};

    let patternName = /(?<name>[A-Za-z]+)/g;
    let patternDigits = /(?<sum>\d)/g;                 // ПРОМЯНА +, само по една цифра взимаме

    let text = input.shift();

    while (text != 'end of race') {
        let matchName = text.match(patternName).join('');
        let matchDigits = text.match(patternDigits).map(Number).reduce((a, v) => {  // ПРОМЯНА +, само по една цифра взимаме
            return a + v;
        }, 0);                                                                      // 0 нула е optional parameter; може и друго стартово число от което да тръгнем

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

    let output = Object
        .entries(collection)
        .sort((a, b) => b[1] - a[1])
        .splice(0, 3)                           // ПРОМЯНА
    //console.log(output)

    console.log(`1st place: ${output[0][0]}             
2nd place: ${output[1][0]}
3rd place: ${output[2][0]}`);
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

