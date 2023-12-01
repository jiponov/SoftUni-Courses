class Person {      // 100/100
    constructor(firstName, lastName, age, email) {
        this.firstName = firstName;                                                                 // set-ване на property-та на обекта с this
        this.lastName = lastName;
        this.age = age;
        this.email = email;
    }

    toString() {                                                                                    // The toString()method should return a string in the following format
        return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
    }
}


// example:
let person = new Person('Anna', 'Simpson', 22, 'anna@yahoo.com');

console.log(person.toString());                                                                    // Anna Simpson (age: 22, email: anna@yahoo.com)

