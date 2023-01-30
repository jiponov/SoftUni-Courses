function train(inputArr) {
    let wagonsArr = inputArr
        .shift()
        .split(' ')
        .map(Number);

    let wagonMaxCapacity = Number(inputArr.shift());

    for (let i = 0; i < inputArr.length; i++) {
        let commands = inputArr[i].split(' ');
        // console.log(commands);

        if (commands[0] === 'Add') {
            wagonsArr.push(Number(commands[1]));
        } else {
            for (let j = 0; j < wagonsArr.length; j++) {
                if (Number(commands[0]) + wagonsArr[j] <= wagonMaxCapacity) {
                    wagonsArr[j] += Number(commands[0]);
                    break;
                }
            }
        }
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
