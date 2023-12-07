class List {                // 100/100
    constructor() {
        this.output = [];                                   // Implement a class List, which keeps a list of numbers, sorted in ascending order. 
        this.size = this.output.length;                     // Note the size of the collection is not a function.
    }

    add(value) {                                            // All functions that expect input will receive data as parameters. 
        this.output.push(value);
        this.size = this.output.length;
        this.output.sort((a, b) => a - b);
    }

    remove(index) {
        if (index < 0 || index > this.output.length) {      // Functions that have validation will be tested with both valid and invalid data. 
            throw new Error('Invalid index');
        }
        this.output.splice(index, 1);
        this.size = this.output.length;
        this.output.sort((a, b) => a - b);
    }

    get(index) {
        if (index < 0 || index > this.output.length) {
            throw new Error('Invalid index');
        }
        return this.output[index];
    }
}


let examplelist = new List();

examplelist.add(5);
examplelist.add(2);
examplelist.add(222);
examplelist.add(6);
examplelist.add(7);
examplelist.add(7997);
console.log(examplelist);
console.log(examplelist.get(1));
examplelist.remove(1);
examplelist.remove(1);
console.log(examplelist.get(1));
console.log(examplelist.get(3));
console.log(examplelist);
