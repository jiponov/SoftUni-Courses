function secretChat(input) {          // 100/100
    // take concealed message
    let message = input.shift();
    let print = true;

    // individual commands
    let commands = {
        'InsertSpace': insert,
        'Reverse': reverse,
        'ChangeAll': changeAll,
    }

    // repeat for every line of input
    while (input[0] != undefined) {
        let line = input.shift().split(':|:');
        if (line == 'Reveal') {
            break;
        }

        let operation = line.shift();
        if (operation == 'InsertSpace') {
            message = commands[operation](line[0]);

        } else if (operation == 'Reverse') {
            message = commands[operation](line[0]);

        } else if (operation == 'ChangeAll') {
            message = commands[operation](line[0], line[1]);

        }


        if (print) {
            console.log(message);
        }
    }

    // print output
    console.log(`You have a new text message: ${message}`);


    function insert(index) {
        index = Number(index);
        let char = ' ';
        let start = message.substring(0, index);
        let end = message.substring(index);
        message = start + char + end;

        print = true;
        return message;
    }

    function reverse(substring) {
        if (message.includes(substring)) {
            let substringIndex = message.indexOf(substring);
            let start = message.slice(0, substringIndex);
            let cut = message.slice(substringIndex, substringIndex + substring.length);
            cut = cut.split('').reverse().join('');

            let end = message.slice(substringIndex + substring.length);
            message = start + end + cut;

            print = true;
            return message;
        } else {
            console.log('error');

            print = false;
            return message;
        }
    }

    function changeAll(find, replacement) {
        let indexOfFind = message.indexOf(find);

        while (indexOfFind != -1) {
            let start = message.substring(0, indexOfFind);
            let cut = message.substring(indexOfFind, indexOfFind + find.length);
            let end = message.substring(indexOfFind + find.length);
            message = start + replacement + end;
            indexOfFind += replacement.length;
            indexOfFind = message.indexOf(find, indexOfFind);
        }

        print = true;
        return message;
    }
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

