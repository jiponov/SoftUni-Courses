function arrayModifier(inputArr) {              // 100/100
    let initialArr = inputArr.shift().split(' ').map(Number);
    let index = 0;
    let commands = inputArr[index++];

    while (commands != 'end') {
        let current = commands.split(' ');
        let operation = current.shift();

        if (operation == 'swap') {
            let a = initialArr[current[0]];
            let b = initialArr[current[1]];
            let wating = a;
            a = b;
            b = wating;
            initialArr[current[0]] = a;
            initialArr[current[1]] = b;

        } else if (operation == 'multiply') {
            let a = initialArr[current[0]];
            let b = initialArr[current[1]];
            let result = (a * b).toString().split(' ').map(Number);
            initialArr[current[0]] = result[0];

        } else if (operation == 'decrease') {

            for (let i = 0; i < initialArr.length; i++) {
                //initialArr[i]--;
                initialArr[i] = initialArr[i] - 1;
            }
        }
        commands = inputArr[index++]
    }
    //console.log(initialArr)
    console.log(initialArr.join(', '))
}

arrayModifier([
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end']);
console.log('---');
arrayModifier([
    '1 2 3 4',
    'swap 0 1',
    'swap 1 2',
    'swap 2 3',
    'multiply 1 2',
    'decrease',
    'end']);