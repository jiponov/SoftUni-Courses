function storeProvision(stock, forDelivery) {

    let store = {};
    let stockL = stock.length;
    let forDeliveryL = forDelivery.length;

    for (let i = 0; i < stockL; i += 2) {
        let currentProduct = stock[i];
        store[currentProduct] = Number(stock[i + 1]);
    }

    for (let j = 0; j < forDeliveryL; j += 2) {
        let currentDelivery = forDelivery[j];

        if (!store.hasOwnProperty(currentDelivery)) {
            store[currentDelivery] = 0
        }
        store[currentDelivery] += Number(forDelivery[j + 1]);
    }
    console.log(store)

    // for (let key in store) {
    //     console.log(`${key} -> ${store[key]}`);
    // }
}
storeProvision(
    [
        'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]);
console.log('---');
storeProvision(
    [
        'Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5'
    ],
    [
        'Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30'
    ]);