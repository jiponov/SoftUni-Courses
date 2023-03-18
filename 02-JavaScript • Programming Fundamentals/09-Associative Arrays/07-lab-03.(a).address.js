function address(input) {
    let book = {};

    for (let line of input) {
        let [name, address] = line.split(':');
        book[name] = address;
    }

    let entries = Object.entries(book);

    let sorted = entries.sort((a, b) => {
        return a[0].localeCompare(b[0]);
    })

    for (let [name, address] of sorted) {
        console.log(`${name} -> ${address}`);
    }

}

address([
    'Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd'
]);


