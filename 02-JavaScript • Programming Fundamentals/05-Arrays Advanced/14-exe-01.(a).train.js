function train(inputArr) {
    let wagonsArr = inputArr
        .shift()
        .split(' ')
        .map(Number);

    let wagonMaxCapacity = Number(inputArr.shift());

    let index = 0;
    let commands = inputArr[index++];

    for (let i = 0; i < inputArr.length; i++) {
        if (inputArr[i].includes('Add')) {
            let currentStr = inputArr[i].split(' ');
            wagonsArr.push(Number(currentStr[1]));
        } else {
            let currentStr = Number(inputArr[i]);

            for (let j = 0; j < wagonsArr.length; j++) {
                if ((wagonsArr[j] + currentStr <= wagonMaxCapacity)) {
                    wagonsArr[j] += currentStr;
                    break;
                }
            }
        }
        commands = inputArr[index++];
    }

    console.log(wagonsArr.join(' '));
}

train(['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75']
);
console.log('---');
train(['0 0 0 10 2 4',
    '10',
    'Add 10',
    '10',
    '10',
    '10',
    '8',
    '6']
);
