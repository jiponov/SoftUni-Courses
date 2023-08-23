function catalogue(inputArr) {

    let myObject = {};

    for (let line of inputArr) {
        let token = line.split(' : ');
        let name = token[0];
        let price = token[1];
        let obj = {};
        obj[name] = price;
        myObject = Object.assign(myObject, obj);
    }

    let sortKeys = Object.keys(myObject);
    sortKeys.sort((a, b) => a.localeCompare(b));

    let previousLetter = sortKeys[0][0];
    let clonOfGroup = false;

    for (let key of sortKeys) {
        let price = myObject[key];
        let currLetter = key[0];
        if (currLetter === previousLetter) {
            if (!clonOfGroup) {
                clonOfGroup = true;
                console.log(currLetter);
            }
            console.log(`  ${key}: ${price}`);
        } else {
            console.log(currLetter);
            console.log(`  ${key}: ${price}`);
        }
        previousLetter = key[0];
    }

}
catalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]);