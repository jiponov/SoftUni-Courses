function storeCatalogue(input) {    // 100/100

    let collection = {};

    for (let line of input) {
        let [name, price] = line.split(' : ');
        price = Number(price);
        let char = name[0];

        if (!collection[char]) {                        // Има ли 'collection' даден KEY 'буква'?
            collection[char] = [{ name, price }];       // създай го тогава
        } else {
            collection[char].push({ name, price });     // Ако има БУКВАТА вече, само добави ред
        }
    }

    //console.log(collection)
    let sortedByChar = Object.entries(collection).sort((a, b) => a[0].localeCompare(b[0]));
    //console.log(sortedByChar)

    for (let [letter, obj] of sortedByChar) {
        //alternative (entries):
        //let sortedByNames = Object.entries(obj).sort((a, b) => (a[1].name).localeCompare(b[1].name));
        let sortedByNames = Object.values(obj).sort((a, b) => a.name.localeCompare(b.name));

        console.log(letter);

        sortedByNames.forEach(obj => console.log(`  ${obj.name}: ${obj.price}`));
        //alternative (entries):
        //sortedByNames.forEach(obj => console.log(`  ${obj[1].name}: ${obj[1].price}`));
    }
}

storeCatalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]);
console.log('-------');
storeCatalogue([
    'Banana : 2',
    "Rubic's Cube : 5",
    'Raspberry P : 4999',
    'Rolex : 100000',
    'Rollon : 10',
    'Rali Car : 2000000',
    'Pesho : 0.000001',
    'Barrel : 10'
]);
