function movingTarget(input) {          // 100/100
    let numbers = input.shift().split(' ').map(Number);

    while (input[0] != undefined) {
        let command = input.shift();
        if (command == 'End') {
            return console.log(`${numbers.join('|')}`);
        }

        let token = command.split(' ');
        let operation = token[0];


        if (operation == 'Shoot') {
            let index = Number(token[1]);
            let power = +token[2];

            if (index >= 0 && index <= numbers.length - 1) {
                let num = numbers[index];
                num -= power;
                if (num <= 0) {
                    numbers.splice(index, 1);
                } else {
                    numbers.splice(index, 1, num);
                }
            }


        } else if (operation == 'Add') {
            let index = Number(token[1]);
            let value = Number(token[2]);

            if (index >= 0 && index <= numbers.length - 1) {
                numbers.splice(index, 0, value);
            } else {
                console.log(`Invalid placement!`);
            }


        } else if (operation == 'Strike') {
            let index = Number(token[1]);
            let radius = Number(token[2]);
            let startIndex = index - radius;
            let endIndex = index + radius;
            let lengthRemove = radius * 2 + 1;

            if ((index >= 0 && index <= numbers.length - 1) && (startIndex >= 0 && startIndex <= numbers.length - 1) && (endIndex >= 0 && endIndex <= numbers.length - 1)) {
                numbers.splice(startIndex, lengthRemove);
            } else {
                console.log(`Strike missed!`);
            }
        }
    }
}

movingTarget([
    "52 74 23 44 96 110",
    "Shoot 5 10",
    "Shoot 1 80",
    "Strike 2 1",
    "Add 22 3",
    "End"]);
console.log('-------');
movingTarget([
    "1 2 3 4 5",
    "Strike 0 1",
    "End"]);

