function lastKNumbersSequence(n, k) {    // 100/100

    let arr = [1];
    for (let i = 0; i < n - 1; i++) {
        let sum = arr.slice(-k).reduce((a, b) => a + b, 0);
        arr.push(sum);
    }
    return arr;

}
lastKNumbersSequence(6, 3);     // [1, 1, 2, 4, 7, 13]
console.log('-------');
lastKNumbersSequence(8, 2);     // [1, 1, 2, 3, 5, 8, 13, 21]
