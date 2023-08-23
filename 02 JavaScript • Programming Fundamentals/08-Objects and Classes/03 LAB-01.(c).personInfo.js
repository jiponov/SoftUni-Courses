function personInfo(firstName, lastName, age) {
    let person = {
        firstName,                  // съкратен запис ,когато имаме променливи 
        lastName,                   // ИМЕТО на ПРОМЕНЛИВАТА съвпада с KEY string-a със СТОЙНОСТТА зад променливата
        age                         // и ИМЕ И СТОЙНОСТ е променливата (КОМПОЗИЦИЯ)
    };
    return person;
}
console.log(personInfo("Peter", "Pan", "20"));
console.log('---');
console.log(personInfo("George", "Smith", "18"));