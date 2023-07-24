function secretChat(input) {          // 100/100

    let message = input.shift();

    while (input[0] != undefined) {
        let line = input.shift().split(':|:');
        if (line == 'Reveal') {
            break;
        }


        let operation = line.shift();
        if (operation == 'InsertSpace') {
            let index = Number(line.shift());
            let char = ' ';
            let start = message.substring(0, index);
            let end = message.substring(index);

            message = start + char + end;
            console.log(message);


        } else if (operation == 'Reverse') {
            let substring = line.shift();

            if (message.includes(substring)) {
                let substringIndex = message.indexOf(substring);
                let start = message.slice(0, substringIndex);
                let cut = message.slice(substringIndex, substringIndex + substring.length);
                cut = cut.split('').reverse().join('');
                let end = message.slice(substringIndex + substring.length);

                message = start + end + cut;
                console.log(message);
            } else {
                console.log('error');
            }

        } else if (operation == 'ChangeAll') {
            let find = line.shift();
            let replacement = line.shift();
            let indexOfFind = message.indexOf(find);

            while (indexOfFind != -1) {
                let start = message.substring(0, indexOfFind);
                let cut = message.substring(indexOfFind, indexOfFind + find.length);
                let end = message.substring(indexOfFind + find.length);
                message = start + replacement + end;

                indexOfFind += replacement.length;
                indexOfFind = message.indexOf(find, indexOfFind);

            }

            console.log(message);
        }
    }

    console.log(`You have a new text message: ${message}`);
}

secretChat([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'
]);
console.log('-------');
secretChat([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'
]);

