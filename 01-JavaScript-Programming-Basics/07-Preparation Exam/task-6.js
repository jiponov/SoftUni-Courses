function solve(input) {

    let index = 0;
    let clients = Number(input[index]);
    index++;
    let clientsBill = 0;

    for (let i = 0; i < clients; i++) {
        let product = input[index++];
        let bill = 0;
        let productCounter = 0;

        while (product != 'Finish') {
            if (product == 'basket') {
                bill += 1.5;
                productCounter++;
            } else if (product == 'wreath') {
                bill += 3.80;
                productCounter++;
            } else if (product == 'chocolate bunny') {
                bill += 7;
                productCounter++;
            }

            product = input[index++];
        }

        if (productCounter % 2 == 0) {
            bill *= 0.8;
        }

        clientsBill += bill;
        console.log(`You purchased ${productCounter} items for ${bill.toFixed(2)} leva.`);
    }

    let avgClBill = clientsBill / clients;
    console.log(`Average bill per client is: ${avgClBill.toFixed(2)} leva.`);
}

solve(['2',
    'basket',
    'wreath',
    'chocolate bunny',
    'Finish',
    'wreath',
    'chocolate bunny',
    'Finish']);

solve(['1',
    'basket',
    'wreath',
    'chocolate bunny',
    'wreath',
    'basket',
    'chocolate bunny',
    'Finish']);

