function employees(input) {

    let listOfEmployees = {}

    for (let el of input) {
        listOfEmployees.name = el;
        listOfEmployees.number = el.length;
        console.log(`Name: ${listOfEmployees.name} -- Personal Number: ${listOfEmployees.number}`);
    }
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
