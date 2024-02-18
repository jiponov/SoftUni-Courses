class List {                // 100/100
    constructor() {
        this.output = [];
        this.size = this.output.length;
    }

    add(value) {
        this.output.push(value);
        this.output.sort((a, b) => a - b);
        this.size++;
    }

    remove(index) {
        if (index >= 0 && index < this.output.length) {
            this.output.splice(index, 1);
            this.size--;
        }
    }

    get(index) {
        if (index >= 0 && index < this.output.length) {
            return this.output[index];
        }
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
