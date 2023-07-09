function furniture(input) {     // 100/100    
    'use strict'
    const participants = input.shift().split(', ');
    const collection = {};

    let line = input.shift();
    let name = "";
    let dist = 0;

    while (line != 'end of race') {
        for (let char of line) {
            if ((char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) || (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122)) {
                name += char;
            } else if (char.charCodeAt(0) >= 48 && char.charCodeAt(0) <= 57) {
                dist += Number(char);
            }
        }

        if (participants.includes(name)) {
            if (!collection.hasOwnProperty(name)) {
                collection[name] = {};
                collection[name] = 0;
            }
            collection[name] += dist;
        }

        name = "";
        dist = 0;
        line = input.shift();
    }


    let result = [];
    let ouput = Object
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

