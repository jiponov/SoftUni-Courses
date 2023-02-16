function personInfo(firstName, lastName, age) {
    let person = {
        'firstName': firstName,
        'lastName': lastName,
        'age': age
    };
    return person;
}
console.log(personInfo("Peter", "Pan", "20"));
console.log('---');
console.log(personInfo("George", "Smith", "18"));

