function computerStore(input) {          // 100/100
    let index = 0;
    let command = input[index];
    index++;
    let isEqualToZero = false;
    let sum = 0;

    while (command != 'special') {
        if (command == 'regular') {
            break;
        }
        let commandAsNumber = Number(command);
        if (commandAsNumber < 0) {
            console.log(`Invalid price!`);
            command = input[index++];
            continue;
        }
        sum += commandAsNumber;

        command = input[index];
        index++;
    }


    let sumWithTaxes = sum * 1.2;
    let taxesOnly = sumWithTaxes - sum;


    if (command == 'special') {
        sumWithTaxes *= 0.9;
    }


    if (sumWithTaxes == 0) {
        console.log(`Invalid order!`);
        return;
    }


    console.log(`Congratulations you've just bought a new computer!
    Price without taxes: ${sum.toFixed(2)}$
    Taxes: ${taxesOnly.toFixed(2)}$
    -----------
    Total price: ${sumWithTaxes.toFixed(2)}$`);
}

computerStore([
    '1050',
    '200',
    '450',
    '2',
    '18.50',
    '16.86',
    'special'
]);
console.log('---');
computerStore([
    '1023',
    '15',
    '-20',
    '-5.50',
    '450',
    '20',
    '17.66',
    '19.30', 'regular'
]);
console.log('---');
computerStore([
    'regular'
]);
