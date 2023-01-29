function arrayManipulations(inputArr) {

    let myArr = inputArr
        .shift()
        .split(' ')
        .map(Number);


    let myAdd = inputArr
        .shift()
        .split(' ');
    let addNumber = Number(myAdd[1]);
    myArr.push(addNumber);


    let myRemove = inputArr
        .shift()
        .split(' ');
    let removeNum = Number(myRemove[1]);
    let filtered = myArr.filter(el => el !== removeNum);


    let myRemoveAt = inputArr
        .shift()
        .split(' ');
    let removeNumAt = Number(myRemoveAt[1]);
    let spliced = filtered.splice(removeNumAt, 1);


    let myInsert = inputArr
        .shift()
        .split(' ');
    let insertNum = Number(myInsert[1]);
    let insertIndex = Number(myInsert[2]);
    let inserted = filtered.splice(insertIndex, 0, insertNum);

    console.log(filtered.join(' '));

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