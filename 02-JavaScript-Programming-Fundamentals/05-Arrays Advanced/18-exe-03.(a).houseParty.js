function houseParty(inputArr) {
    let resultArr = [];

    for (let element of inputArr) {
        let command = element.split(' ');
        let name = command[0];

        if (command.length === 3) {
            if (resultArr.includes(name)) {
                console.log(`${name} is already in the list!`);
            } else {
                resultArr.push(name);
            }
        } else {
            if (!resultArr.includes(name)) {
                console.log(`${name} is not in the list!`);
            } else {
                let index = resultArr.indexOf(name);
                resultArr.splice(index, 1);
            }
        }
    }

    console.log(resultArr.join('\n'));
}

houseParty(['Allie is going!',
    'George is going!',
    'John is not going!',
    'George is not going!']
);
console.log('---');
houseParty(['Tom is going!',
    'Annie is going!',
    'Tom is going!',
    'Garry is going!',
    'Jerry is going!']
);