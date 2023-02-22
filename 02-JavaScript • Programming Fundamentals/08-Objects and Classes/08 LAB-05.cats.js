function cats(catsInput) {

    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    let catsArr = [];

    for (let catData of catsInput) {                // Create all objects using the class constructor and the parsed input data, store them in an array
        let token = catData.split(" ");
        let catName = token[0];
        let catAge = Number(token[1]);
        let myCatObj = new Cat(catName, catAge);
        catsArr.push(myCatObj);
        //console.log(myCatObj)
    }
        //console.log(catsArr)                      // -> масив от обекти

    for (let newCat of catsArr) {                   // Loop through the array using for…of a cycle and invoke .meow() method
        newCat.meow()
    }

}
cats(['Mellow 2', 'Tom 5']);
console.log('----------------');
cats(['Candy 1', 'Poppy 3', 'Nyx 2']);
