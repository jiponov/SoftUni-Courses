function employees(inputArr) {      

    class Employees {
        constructor(employeeName, personalNum) {
            this.employeeName = employeeName;
            this.personalNum = personalNum;
        }
    }

    let emplArr = [];

    for (let person of inputArr) {
        let name = person;
        let nameL = person.length;
        //console.log(nameL)
        let myPersonObj = new Employees(name, nameL);
        emplArr.push(myPersonObj);
        //console.log(myPersonObj);
    }

    for (let el of emplArr) {
        console.log(`Name: ${el.employeeName} -- Personal Number: ${el.personalNum}`)
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
