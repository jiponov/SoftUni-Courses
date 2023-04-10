function aMinerTask(inputArr) {
    let result = {};

    for (let i = 0; i < inputArr.length; i += 2) {
        let currentKey = inputArr[i];
        let currentValue = Number(inputArr[i + 1]);

        if (!result.hasOwnProperty(currentKey)) {
            result[currentKey] = currentValue;
        } else {
            result[currentKey] += currentValue;
        }
    }
    //console.log(result)
    for (let key in result) {
        console.log(`${key} -> ${result[key]}`);
    }
}
aMinerTask([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17'
]);
console.log('-------');
aMinerTask([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
]);
