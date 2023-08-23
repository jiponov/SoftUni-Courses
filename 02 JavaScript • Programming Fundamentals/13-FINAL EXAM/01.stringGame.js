function strGame(input) {
    let text = input.shift();
    for (let i = 0; i < input.length; i++) {
        let [command, v1, v2] = input[i].split(' ');
        let result;
        if (command == 'Done') break;
        //Op
        if (command == 'Change') {
            while (text.includes(v1)) {
                text = text.replace(v1, v2);
            }
            console.log(text);
            //result = text;
        } else if (command == 'Includes') {
            if (text.includes(v1)) {
                console.log('True');
            } else {
                console.log('False');
            }
        } else if (command == 'End') {
            if (input[input.length] == v1) {
                console.log('True');
            } else {
                console.log('False');
            }
        } else if (command == 'Uppercase') {
            text = text.toUpperCase();
            console.log(text);
            //result = text
        } else if (command == 'FindIndex') {
            if (text.includes(v1)) {
                console.log(text.indexOf(v1));
            }
        } else if (command == 'Cut') {
            v1 = +v1
            v2 = +v2
            text = text.slice(v1, v1 + v2)
            console.log(text);
        }
    }
}