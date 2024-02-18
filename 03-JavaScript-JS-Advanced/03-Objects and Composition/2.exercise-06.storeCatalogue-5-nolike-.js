function storeCatalogue(input) {    // 100/100

    let result = input.sort((a, b) => a.localeCompare(b));

    let current = [];
    let char = "";

    for (let i = 0; i < result.length; i++) {
        current = result[i].split(' : ');

        if (result[i][0] != char) {
            console.log(result[i][0]);
        }

        console.log(`  ${current[0]}: ${current[1]}`);

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

