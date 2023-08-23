function storage(input) {

    let shop = {};

    for (let line of input) {
        let [item, quantity] = line.split(' ');
        if (!shop.hasOwnProperty(item)) {
            shop[item] = 0;
        }
        shop[item] += Number(quantity);
    }

    for (let key in shop) {
        console.log(`${key} -> ${shop[key]}`);
    }
}

storage([
    'tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40'
]);
console.log('---')
storage([
    'apple 50',
    'apple 61',
    'coffee 115',
    'coffee 40'
]);
