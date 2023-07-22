function theImitationGame(input) {          // 100/100

    let message = input.shift();

    while (input[0] != undefined) {
        let line = input.shift().split('|');
        if (line == 'Decode') {
            break;
        }

        let operation = line.shift();
        if (operation == 'Move') {
            let num = Number(line.shift());
            let move = message.slice(0, num);
            let left = message.slice(num);
            message = left + move;


        } else if (operation == 'Insert') {
            let index = Number(line.shift());
            let value = line.shift();
            let start = message.slice(0, index);
            let end = message.slice(index);
            message = start + value + end;


        } else if (operation == 'ChangeAll') {
            let char = line.shift();
            let newValue = line.shift();
            let indexOfChar = message.indexOf(char);

            while (indexOfChar != -1) {
                message = message.replace(char, newValue);
                indexOfChar = message.indexOf(char);
            }
        }
    }

    console.log(`The decrypted message is: ${message}`);
}

theImitationGame([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode',
]);
console.log('-------');
theImitationGame([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode',
]);

