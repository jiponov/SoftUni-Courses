function biggerHalf(inputArr) {    // 100/100

    let sortedArr = inputArr.sort((a, b) => a - b).slice(Math.floor(inputArr.length / 2))
    return sortedArr;
}

biggerHalf([4, 7, 2, 5]);
console.log('-------');
biggerHalf([3, 19, 14, 7, 2, 19, 6]);