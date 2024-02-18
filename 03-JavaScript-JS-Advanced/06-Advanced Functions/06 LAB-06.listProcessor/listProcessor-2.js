function listProcessor(input) {     // 100/100
    // create object 
    const commands = {
        collection: [],
        add(str) {
            this.collection.push(str);
        },
        remove(str) {
            this.collection = this.collection.filter((x) => x != str);
        },
        print() {
            console.log(this.collection.join(','));
        },
    };

    // for every data
    input.forEach((data) => {
        const [command, value] = data.split(' ');
        commands[command](value);
    });
}

listProcessor(['add hello', 'add again', 'remove hello', 'add again', 'print']);

console.log('---');

listProcessor(['add pesho', 'add george', 'add peter', 'remove peter', 'print']);