function code(input) {          // 100/100
    let shop = {};
    let sum = 0;

    while (input[0] != 'Complete') {
        let command = input.shift().split(' ');
        let operation = command[0];
        let quantity = Number(command[1]);
        let food = command[2];

        if (operation == 'Receive') {
            if (quantity > 0) {
                if (!shop.hasOwnProperty(food)) {
                    shop[food] = 0;
                }
                shop[food] += quantity;
            }

        } else if (operation == 'Sell') {
            if (!shop.hasOwnProperty(food)) {
                console.log(`You do not have any ${food}.`);
                continue;
            }

            if (quantity > shop[food]) {
                let lastSold = Number(shop[food]);
                sum += shop[food];

                delete shop[food];
                console.log(`There aren't enough ${food}. You sold the last ${lastSold} of them.`);

            } else {
                shop[food] -= quantity;
                sum += quantity;
                console.log(`You sold ${quantity} ${food}.`);
                if (shop[food] <= 0) {
                    delete shop[food];
                }
            }
        }
    }


    for (let el in shop) {
        console.log(`${el}: ${shop[el]}`);
    }

    console.log(`All sold: ${sum} goods`);

}

code([
    "Receive 105 cookies",
    "Receive 10 donuts",
    "Sell 10 donuts",
    "Sell 1 bread",
    "Complete"
]);
console.log('-----');
code([
    "Receive 10 muffins",
    "Receive 23 bagels",
    "Sell 5 muffins",
    "Sell 10 bagels",
    "Complete"
]);
