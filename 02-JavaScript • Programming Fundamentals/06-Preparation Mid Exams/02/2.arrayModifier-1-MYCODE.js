function arrayModifier(input) {          // 100/100
    let values = input.shift().split(' ').map(Number);

    while (input.length > 0) {            // input[0] != undefined
        let tokens = input.shift().split(' ');
        let command = tokens[0];

        if (command == 'swap') {
            let indexA = Number(tokens[1]);
            let indexB = Number(tokens[2]);
            let numA = values[indexA];
            let numB = values[indexB];
            values.splice(indexB, 1, numA);
            values.splice(indexA, 1, numB);
        } else if (command == 'multiply') {
            let indexA = Number(tokens[1]);
            let indexB = Number(tokens[2]);
            let numA = values[indexA];
            let numB = values[indexB];
            let productC = numA * numB;
            values[indexA] = productC;
        } else if (command == 'decrease') {
            values = values.map(el => el - 1);
        }
    }

    console.log(`${values.join(', ')}`);
}

arrayModifier([
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
]);
console.log('-------');
arrayModifier([
    '1 2 3 4',
    'swap 0 1',
    'swap 1 2',
    'swap 2 3',
    'multiply 1 2',
    'decrease',
    'end'
]);


