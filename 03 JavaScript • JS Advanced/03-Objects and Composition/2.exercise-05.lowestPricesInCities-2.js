function lowestPricesInCities(input) {    // 100/100

    // create collection
    const result = {};

    // parse the input
    for (const line of input) {
        const [town, product, price] = line.split(' | ');

        if (!result[product]) {
            result[product] = {
                town,
                price: Number(price)
            };

        } else if (Number(price) < result[product].price) {
            result[product].price = Number(price);
            result[product].town = town
        }
    }
    //console.log(result)


    // print the output
    for (const [product, obj] of Object.entries(result)) {
        console.log(`${product} -> ${obj.price} (${obj.town})`);
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
