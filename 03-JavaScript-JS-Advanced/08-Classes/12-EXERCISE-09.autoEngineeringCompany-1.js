function autoEngineeringCompany(input) {            // 100/100

    const collection = {};

    for (const el of input) {
        const [brand, model, quantity] = el.split(" | ");

        if (!collection.hasOwnProperty(brand)) {
            collection[brand] = {};
        }

        if (!collection[brand].hasOwnProperty(model)) {
            collection[brand][model] = 0;
        }

        collection[brand][model] += Number(quantity);
    }

    for (const [brand, models] of Object.entries(collection)) {
        console.log(brand);                                                 // {carBrand}

        for (const [model, quantity] of Object.entries(models)) {
            console.log(`###${model} -> ${quantity}`);                      // ###{carModel} -> {producedCars}
        }
    }

    //console.log(collection);
    //console.log(Object.entries(collection));
}


autoEngineeringCompany([
    'Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10'
]);


/*

Audi
###Q7 -> 1000
###Q6 -> 100
BMW
###X5 -> 1000
###X6 -> 100
Citroen
###C4 -> 145
###C5 -> 10
Volga
###GAZ-24 -> 1000000
Lada
###Niva -> 1000000
###Jigula -> 1000000

*/