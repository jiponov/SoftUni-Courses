function convertToJSON(name, lastName, hairColor) {
    let obj = {                                         // object to JSON
        name,
        lastName,
        hairColor
    };
    let jsonObj = JSON.stringify(obj);
    console.log(jsonObj)

}
convertToJSON('George', 'Jones', 'Brown');
console.log('---');
convertToJSON('George', 'Jones', 'Brown');