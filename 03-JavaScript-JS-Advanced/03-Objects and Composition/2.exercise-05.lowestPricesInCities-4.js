function lowestPricesInCities(input) {    // 100/100

    let result = [];

    while (input[0] != undefined) {      // input.length > 0
        // let line = input.shift().split(' | ');
        // let city = line[0];
        // let product = line[1];
        // let price = line[2];
        let [city, product, price] = input.shift().split(' | ');


        if (result.filter(x => x.product === product).length > 0) {     // .length > 0  дали продукта е наличен в result проверка
            let myObj = result.find(x => x.product === product);

            if (myObj.price > Number(price)) {
                myObj.price = Number(price);
                myObj.city = city;
            }

        } else {
            let myObj = {
                product,
                city,
                price: Number(price),
            };

            result.push(myObj);
        }
    }


    for (let el of result) {
        console.log(`${el.product} -> ${el.price} (${el.city})`);
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
