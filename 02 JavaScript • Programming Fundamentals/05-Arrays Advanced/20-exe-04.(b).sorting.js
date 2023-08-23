function sorting(inputArray) {
    let newArr = inputArray.slice();
    let sortedArr = newArr.sort((a, b) => b - a);
    let resultArr = [];

    while (sortedArr.length > 0) {
        resultArr.push(sortedArr.shift());
        resultArr.push(sortedArr.pop());
    }

    console.log(resultArr.join(' '));
}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
console.log('---');
