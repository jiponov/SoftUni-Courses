function phoneBook(inputArr) {

    let result = new Map();


    // for every line in inputArr
    for (let line of inputArr) {                    // Array iteration
        // --parse line
        let [name, phone] = line.split(' ');

        // --store data: If the same name occurs, save the latest number (by default is like that)
        result.set(name, phone);
    }


    // print result
    let keys = result.keys();                       // 1 ВАРИАНТ
    for (let key of keys) {
        console.log(key, '->', result.get(key));
    }

    // print result
    let entries = result.entries();                 // 2 ВАРИАНТ
    for (let [name, phone] of entries) {
        console.log(name, '->', phone);
    }

    // print result
    for (let [name, phone] of result) {            // 3 ВАРИАНТ
        console.log(name, '->', phone);
    }
}


phoneBook(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344']);