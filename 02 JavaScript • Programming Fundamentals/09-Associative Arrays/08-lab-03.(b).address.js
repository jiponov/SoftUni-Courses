function address(inputArr) {
    // create
    let result = {};

    // for every line
    // --parse
    // --store
    for (let line of inputArr) {
        let [name, address] = line.split(':');
        result[name] = address;                         // If you receive the same name twice just replace the address!
    }
    //console.log(result)

    // sort result
    let sorted = Object.keys(result)                    // с OBJECT.KEYS МЕТОД за СОРТИРАНЕ
    sorted.sort((a, b) => a.localeCompare(b));

    // print result
    for (let name of sorted) {                          // или:  for (let [name, address] of sorted)        
        console.log(name, '->', result[name]);          // взимаме от result Обекта value-то
    }
}

address(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd']);