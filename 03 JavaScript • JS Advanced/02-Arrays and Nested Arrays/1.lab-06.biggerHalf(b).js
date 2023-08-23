function biggerHalf(inputArr) {    // 100/100

    inputArr.sort((a, b) => a - b);
    const result = [];

    for (let i = Math.floor(inputArr.length / 2); i < inputArr.length; i++) {
        result.push(inputArr[i]);
    }

    return result;
}

console.log(biggerHalf([4, 7, 2, 5]));
console.log('-------');
console.log(biggerHalf([3, 19, 14, 7, 2, 19, 6]));