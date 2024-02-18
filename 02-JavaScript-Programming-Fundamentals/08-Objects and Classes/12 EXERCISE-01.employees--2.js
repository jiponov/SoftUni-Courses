function employees(inputArr) {

    let listObject = {};

    for (let person of inputArr) {
        listObject.name = person;
        listObject.number = person.length;
        console.log(`Name: ${listObject.name} -- Personal Number: ${listObject.number}`);
    }
    //console.log(listObject)
}
employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]);
console.log('---');
employees([
    'Samuel Jackson',
    'Will Smith',
    'Bruce Willis',
    'Tom Holland'
]);
