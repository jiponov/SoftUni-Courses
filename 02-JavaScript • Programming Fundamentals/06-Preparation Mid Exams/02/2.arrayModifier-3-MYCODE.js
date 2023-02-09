function arrayModifier(arr) {               // 100/100

    let array = arr[0].split(' ');
    let currentRow = [];
    let currentCommand = "";
    let currentIndex1 = 0;
    let currentIndex2 = 0;
    let tempSwapValue = 0;

    for (let i = 1; i < arr.length; i++) {
        currentRow = arr[i].split(' ');
        currentCommand = currentRow[0];
        currentIndex1 = currentRow[1];
        currentIndex2 = currentRow[2];

        if (currentCommand == "swap") {
            tempSwapValue = array[currentIndex1];
            array[currentIndex1] = array[currentIndex2];
            array[currentIndex2] = tempSwapValue;

        } else if (currentCommand == "multiply") {
            array[currentIndex1] = Number(array[currentIndex1]) * Number(array[currentIndex2])
        } else if (currentCommand == "decrease") {
            for (let j = 0; j < array.length; j++) {
                array[j]--;
            }
        } else {
            break;
        }
    }

    console.log(array.join(', '));
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