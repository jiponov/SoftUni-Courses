function computerStore(input) {          // 100/100
    let priceWithoutTax = 0;
    let setTypeCustomer = "";

    while (input[0] != undefined) {      // input.length > 0
        let command = input.shift();

        if (command == 'special' || command == 'regular') {
            setTypeCustomer = command;
            break;
        } else {
            let currentPrice = Number(command);

            if (currentPrice < 0) {
                console.log(`Invalid price!`);
                continue;
            }

            priceWithoutTax += currentPrice;
        }
    }

    let priceTotal = priceWithoutTax * 1.2;
    let tax = priceTotal - priceWithoutTax;     // Taxes 20% only:  priceTotal * 0.2;


    if (setTypeCustomer == 'special') {
        priceTotal *= 0.9;
    }


    if (priceTotal == 0) {
        console.log(`Invalid order!`);          // or with return operator;
    } else {
        console.log(`Congratulations you've just bought a new computer!
    Price without taxes: ${priceWithoutTax.toFixed(2)}$
    Taxes: ${tax.toFixed(2)}$
    -----------
    Total price: ${priceTotal.toFixed(2)}$`);
    }
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
console.log('-------');
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
console.log('-------');
computerStore([
    'regular'
]);
