function lowestPricesInCities(input) {    // 100/100

    let collection = {};

    for (let line of input) {
        let splitted = line.split(" | ");

        let [town, product, price] = splitted;
        price = Number(price);

        if (!collection.hasOwnProperty(product)) {
            collection[product] = {
                town: null,
                price: Number.MAX_SAFE_INTEGER,
            };
        }

        if (price < collection[product].price) {
            collection[product].price = price;
            collection[product].town = town;
        }
    }
    //console.log(collection)

    for (let key in collection) {
        console.log(`${key} -> ${collection[key].price} (${collection[key].town}) `)
    }
}

lowestPricesInCities([
    'Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']
);
