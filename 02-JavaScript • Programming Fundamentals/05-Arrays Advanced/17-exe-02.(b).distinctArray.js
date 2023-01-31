function distinctArray(inputArr) {
    let myArr = [];
    for (let i = 0; i < inputArr.length; i++) {
        let current = inputArr[i];
        let indexOfEl = inputArr.indexOf(current);
        if (i === indexOfEl) {
            myArr.push(current);
        }
    }
    console.log(myArr.join(' '));
}

distinctArray([1, 2, 3, 4]);
console.log('---');
distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]);
console.log('---');
distinctArray([20, 8, 12, 13, 4, 4, 8, 5]);