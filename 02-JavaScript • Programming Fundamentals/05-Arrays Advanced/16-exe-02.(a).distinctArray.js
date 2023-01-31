function distinctArray(inputArr) {
    let resultArr = [];
    for (let i = 0; i < inputArr.length; i++) {
        if (!resultArr.includes(inputArr[i])) {
            resultArr.push(inputArr[i]);
        }
    }
    console.log(resultArr.join(' '));
}

distinctArray([1, 2, 3, 4]);
console.log('---');
distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]);
console.log('---');
distinctArray([20, 8, 12, 13, 4, 4, 8, 5]);