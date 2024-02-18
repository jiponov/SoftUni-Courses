function getPersons() {     // 100/100

    const output = [];

    class Person {
        constructor(firstName, lastName, age, email) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
            this.email = email;
        }

        toString() {
            return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
        }
    }

    let person1 = new Person('Anna', 'Simpson', 22, 'anna@yahoo.com');
    output.push(person1);
    let person2 = new Person('SoftUni');
    output.push(person2);
    let person3 = new Person('Stephan', 'Johnson', 25);
    output.push(person3);
    let person4 = new Person('Gabriel', 'Peterson', 24, 'g.p@gmail.com');
    output.push(person4);

    return output;                  // As output, return an array with Person instances.
}

console.log(getPersons());
/* AS OUTPUT:

[
  Person {
    firstName: 'Anna',
    lastName: 'Simpson',
    age: 22,
    email: 'anna@yahoo.com'
  },
  Person {
    firstName: 'SoftUni',
    lastName: undefined,
    age: undefined,
    email: undefined
  },
  Person {
    firstName: 'Stephan',
    lastName: 'Johnson',
    age: 25,
    email: undefined
  },
  Person {
    firstName: 'Gabriel',
    lastName: 'Peterson',
    age: 24,
    email: 'g.p@gmail.com'
  }
]

*/