function code(input) {      // 100/100

    let text = input.shift();

    while (input[0] != 'Easter') {
        let commands = input.shift().split(' ');
        let operation = commands[0];

        if (operation == 'Replace') {
            let oldChar = commands[1];
            let newChar = commands[2];
            if (text.includes(oldChar)) {
                while (text.includes(oldChar)) {
                    text = text.replace(oldChar, newChar)
                }
            }
            console.log(text);

        } else if (operation == 'Remove') {
            let remove = commands[1];
            text = text.replace(remove, "");
            console.log(text);

        } else if (operation == 'Includes') {
            let word = commands[1];
            if (text.includes(word)) {
                console.log('True');
            } else {
                console.log('False');
            }

        } else if (operation == 'Change') {
            let uplow = commands[1];
            if (uplow == 'Upper') {
                text = text.toLocaleUpperCase();
            } else if (uplow == 'Lower') {
                text = text.toLocaleLowerCase();
            }
            console.log(text);

        } else if (operation == 'Reverse') {
            let startIndex = Number(commands[1]);
            let endIndex = Number(commands[2]);             // if (text[startIndex] && text[endIndex]) { 
            if (text[startIndex] && text[endIndex]) {       // if ((startIndex >= 0 && startIndex <= text.length - 1) && (endIndex >= 0 && endIndex <= text.length - 1) && (startIndex <= endIndex)) {
                let subStrPrint = text.substring(startIndex, endIndex + 1).split('').reverse().join('');
                console.log(subStrPrint);
            }
        }
    }
}

code([
    'EasteriEggsscomming',
    'Replace i I',
    'Remove Eggs',
    'Remove commIng',
    'Change Lower',
    'Reverse 0 17',
    'Easter'
]);
console.log('-----');
code([
    'Easterbscomming',
    'Replace b I',
    'Remove commIng',
    'Change Upper',
    'Reverse 0 5',
    'Easter'
]);
