function arrayManipulations(inputArr) {
    let myArr = inputArr.shift().split(' ').map(Number)
    for (let i = 0; i < inputArr.length; i++) {
        let item = inputArr[i].split(' ')
        if (item[0] === 'Add') {
            myArr.push(item[1])
        } else if (item[0] === 'Remove') {
            myArr = myArr.filter(el => el !== Number(item[1]));
        } else if (item[0] === 'RemoveAt') {
            myArr.splice(Number(item[1]), 1);
        } else if (item[0] === 'Insert') {
            myArr.splice(Number(item[2]), 0, Number(item[1]));
        }
    }
    console.log(myArr.join(' '));
}

arrayManipulations(['4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3']
);
console.log('---')
arrayManipulations(['6 12 2 65 6 42',
    'Add 8',
    'Remove 12',
    'RemoveAt 3',
    'Insert 6 2']
);