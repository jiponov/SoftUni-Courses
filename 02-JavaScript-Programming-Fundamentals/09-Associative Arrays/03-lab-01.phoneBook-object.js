function phoneBook(inputArr) {

    let resultObj = {};

    // for every line in inputArr
    for (let line of inputArr) {        // Array iteration
        // --parse line
        let tokens = line.split(' ');
        let name = tokens[0];
        let phone = tokens[1];
        // --store data: If the same name occurs, save the latest number (by default is like that)
        resultObj[name] = phone;
        //console.log(resultObj)
    }
    //console.log(resultObj)
    // print resultObj
    for (let keyName in resultObj) {    // Obejct iteration
        console.log(`${keyName} -> ${resultObj[keyName]}`);
    }
}

phoneBook(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344']);