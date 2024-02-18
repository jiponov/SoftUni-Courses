function storeCatalogue(input) {    // 100/100
    // create
    let collection = {};

    // parse the input
    while (input[0] != undefined) {     // input.length > 0

        let [name, price] = input.shift().split(' : ');
        price = Number(price);
        let letter = name[0];

        if (!collection[letter]) {
            collection[letter] = [{ name, price }];
        } else {
            collection[letter].push({ name, price });
        }
    }

    // sort
    const sortedByLetter = Object.entries(collection).sort((a, b) => a[0].localeCompare(b[0]));
    // console.log(collection)
    // console.log(sortedByLetter)

    // print the output

    for (let [letter, obj] of sortedByLetter) {
        const sortedNames = Object.values(obj).sort((a, b) => a.name.localeCompare(b.name));

        console.log(letter);
        sortedNames.forEach(obj => console.log(`  ${obj.name}: ${obj.price}`))
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
    'T-Shirt : 10']);
console.log('-------');
storeCatalogue([
    'Banana : 2',
    "Rubic's Cube : 5",
    'Raspberry P : 4999',
    'Rolex : 100000',
    'Rollon : 10',
    'Rali Car : 2000000',
    'Pesho : 0.000001',
    'Barrel : 10']);

