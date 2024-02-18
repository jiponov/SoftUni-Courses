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
    let sortedArr = Object.entries(result)                 // с OBJECT.ENTRIES МЕТОД за СОРТИРАНЕ
    sortedArr.sort((a, b) => {
        let nameA = a[0];
        let nameB = b[0];
        return nameA.localeCompare(nameB);
    });

    // print result
    for (let entry of sortedArr) {                         // или:  for (let [name, address] of sortedArr)
        let name = entry[0];
        let address = entry[1];
        console.log(name, '->', address);
    }
}

address(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd']);