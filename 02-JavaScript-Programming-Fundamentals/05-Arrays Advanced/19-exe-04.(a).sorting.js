function sorting(inputArr) {
    let copyAscendingArr = inputArr.slice();
    let copyDescendingArr = inputArr.slice();
    let sortedSmallArr = copyAscendingArr.sort((a, b) => a - b);
    let sortedBIgArr = copyDescendingArr.sort((a, b) => b - a);
    let resultArr = [];

    for (let i = 0; i < sortedBIgArr.length / 2; i++) {
        resultArr.push(sortedBIgArr[i]);
    }

    for (let j = 0; j < sortedBIgArr.length; j++) {
        if (j % 2 === 1) {
            let current = sortedSmallArr.shift();
            resultArr.splice(j, 0, current);
        }
    }

    console.log(resultArr.join(' '));
}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
console.log('---');
sorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47]);