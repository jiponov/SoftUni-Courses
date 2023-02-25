function storeProvision(currentStocks, forDelivery) {

    let store = {};

    let currentLength = currentStocks.length;
    let forDeliveryLength = forDelivery.length;

    for (let i = 0; i < currentLength; i += 2) {        // For Loop (classic)
        let product = currentStocks[i];
        store[product] = Number(currentStocks[i + 1]);
    }
    //console.log(store)

    for (let j = 0; j < forDeliveryLength; j += 2) {    // For Loop (classic)
        let product = forDelivery[j];
        if (!store.hasOwnProperty(product)) {           // ако нещо (проперти) го НЯМА в наличност, то сложи го в обекта
            store[product] = 0;                         // зануляваме го за да го вкараме; Ако го няма в 1-я масив го ДОБАВЯМЕ; 
        }
        store[product] += Number(forDelivery[j + 1]);   // тук му даваме стойността вече например Flour. 
    }                                                   // A иначе ако го имаше то само добавяме от 2-я масив и проверката отпада с if.
    //console.log(store)

    for (let key in store) {                            // For-In Loop (NEW) - OBJECTS
        console.log(`${key} -> ${store[key]}`);         // KEY -> VALUE

    }

}
storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
], [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
]);
console.log('---');
storeProvision([
    'Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5'
], [
    'Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30'
]);
