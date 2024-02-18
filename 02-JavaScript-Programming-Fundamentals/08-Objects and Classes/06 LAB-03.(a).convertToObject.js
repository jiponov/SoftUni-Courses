function convertToObject(jsonStr) {
    // jsonStr = object as String
    let person = JSON.parse(jsonStr);       // JSON to OBJECT
    //console.log(person)
    let props = Object.keys(person);
    for (let key of props) {
        console.log(`${key}: ${person[key]}`);
    }

}
convertToObject('{"name": "George", "age": 40, "town": "Sofia"}');
console.log('---');
convertToObject('{"name": "Peter", "age": 35, "town": "Plovdiv"}');

