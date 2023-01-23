function lastKNumbersSequence(n, k) {
    // create arr array containing 1
    // repeat n-times (като вадим единица (n-1), защото почваме с arr=[1])
    // - take last k elements from result array arr
    // - sum elements
    // - add sum to array
    // print result

    let arr = [1];

    for (let i = 0; i < n - 1; i++) {
        let lastK = arr.slice(-k);
        let sum = 0;
        for (let el of lastK) {
            sum += el;
        }
        arr.push(sum);
    }

    console.log(arr.join(' '));
}

lastKNumbersSequence(6, 3);
console.log('---');
lastKNumbersSequence(8, 2); 