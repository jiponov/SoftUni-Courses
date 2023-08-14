function biggerHalf(inputArr) {    // 100/100

    let sortedArr = inputArr.sort((a, b) => a - b).slice((inputArr.length / 2))
    return sortedArr;
}

biggerHalf([4, 7, 2, 5]);   // [5, 7]
console.log('-------');
biggerHalf([3, 19, 14, 7, 2, 19, 6]);   // [7, 14, 19, 19]