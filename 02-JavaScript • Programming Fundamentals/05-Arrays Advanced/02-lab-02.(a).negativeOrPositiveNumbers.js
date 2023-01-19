function negativeOrPositiveNumbers(arr) {

    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        let current = Number(arr[i]);
        if (current < 0) {
            newArr.unshift(current);
        } else {
            newArr.push(current);
        }
    }

    let printLine = newArr.join('\n')
    console.log(printLine);
}

negativeOrPositiveNumbers(['7', '-2', '8', '9']);
console.log('---');
negativeOrPositiveNumbers(['3', '-2', '0', '-1']);

