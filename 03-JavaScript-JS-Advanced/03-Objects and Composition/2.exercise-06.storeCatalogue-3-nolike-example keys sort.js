function storeCatalogue(input) {    // EXAMPLE keys only

    let result = input.sort((a, b) => a.localeCompare(b));

    let char = "";
    let obj = {};

    for (let i = 0; i < result.length; i++) {

        let [name, price] = result[i].split(' : ');
        obj[name] = price;

        if (result[i][0] != char) {
            console.log(result[i][0]);
        }

        let keys = Object.keys(obj).sort((a, b) => b.localeCompare(a));     // sort by keys alphabetical order descending

        console.log(`  ${name}: ${obj[name]}`);

        char = result[i][0];
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

