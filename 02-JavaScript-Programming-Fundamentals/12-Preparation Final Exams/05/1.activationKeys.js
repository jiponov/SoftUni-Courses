function activationKeys(input) {          // 100/100
    'use strict'

    let key = input.shift();

    let actions = {
        'Contains': contains,
        'Flip': flip,
        'Slice': slice,
    }

    while (input[0] != undefined) {
        let line = input.shift().split('>>>');
        if (line == 'Generate') {
            break;
        }

        let operation = line[0];
        if (operation == 'Contains') {
            key = actions[operation](key, line[1]);
        } else if (operation == 'Flip') {
            key = actions[operation](key, line[1], line[2], line[3]);
        } else if (operation == 'Slice') {
            key = actions[operation](key, line[1], line[2]);
        }
    }

    console.log(`Your activation key is: ${key}`);


    function contains(text, substring) {
        if (text.includes(substring)) {
            console.log(`${text} contains ${substring}`);
            return text;
        } else {
            console.log(`Substring not found!`);
            return text;
        }
    }

    function flip(text, check, startIndex, endIndex) {
        startIndex = Number(startIndex);
        endIndex = Number(endIndex);
        if (check == 'Upper') {
            let start = text.substring(0, startIndex);
            let cut = text.substring(startIndex, endIndex);
            cut = cut.toLocaleUpperCase();
            let end = text.substring(endIndex);
            text = start + cut + end;
            console.log(text);
            return text;
        } else if (check == 'Lower') {
            let start = text.substring(0, startIndex);
            let cut = text.substring(startIndex, endIndex);
            cut = cut.toLocaleLowerCase();
            let end = text.substring(endIndex);
            text = start + cut + end;
            console.log(text);
            return text;
        }
    }

    function slice(text, startIndex, endIndex) {
        startIndex = Number(startIndex);
        endIndex = Number(endIndex);
        let start = text.substring(0, startIndex);
        let cut = text.substring(startIndex, endIndex);
        let end = text.substring(endIndex);
        text = start + end;
        console.log(text);
        return text;
    }
}

activationKeys([
    "abcdefghijklmnopqrstuvwxyz",
    "Slice>>>2>>>6",
    "Flip>>>Upper>>>3>>>14",
    "Flip>>>Lower>>>5>>>7",
    "Contains>>>def",
    "Contains>>>deF",
    "Generate"
]);
console.log('-------');
activationKeys([
    "134softsf5ftuni2020rockz42",
    "Slice>>>3>>>7",
    "Contains>>>-rock",
    "Contains>>>-uni-",
    "Contains>>>-rocks",
    "Flip>>>Upper>>>2>>>8",
    "Flip>>>Lower>>>5>>>11",
    "Generate"
]);