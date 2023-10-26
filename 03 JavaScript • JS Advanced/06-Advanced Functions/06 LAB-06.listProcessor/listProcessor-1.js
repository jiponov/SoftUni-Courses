function listProcessor(input) {     // 100/100

    let collection = [];

    const commands = {
        add: (str) => collection.push(str),
        remove: (str) => collection = collection.filter((x) => x != str),
        print: () => console.log(collection.join(','))
    }

    for (let data of input) {
        const [command, value] = data.split(' ');
        commands[command](value);
    }
}

listProcessor(['add hello', 'add again', 'remove hello', 'add again', 'print']);

console.log('---');

listProcessor(['add pesho', 'add george', 'add peter', 'remove peter', 'print']);