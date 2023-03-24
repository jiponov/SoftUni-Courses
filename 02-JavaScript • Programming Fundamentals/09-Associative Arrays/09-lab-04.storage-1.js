function storage(input) {

    let result = new Map();

    // for every line of input
    for (let line of input) {
        // --parse
        let [product, qty] = line.split(' ');
        qty = Number(qty);

        // --add new quantuty to existing quantity
        if (result.has(product)) {
            let existing = result.get(product);
            result.set(product, qty + existing);
        } else {
            result.set(product, qty);
        }
    }

    // print result
    for (let [product, qty] of result) {
        console.log(product, '->', qty);
    }
}

storage(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40']);