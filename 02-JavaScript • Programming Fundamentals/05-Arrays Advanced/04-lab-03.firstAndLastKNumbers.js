function firstAndLastKNumbers(arr) {
    let k = arr.shift();
    let newArr = arr;

    let first = newArr.slice(0, k);
    let last = newArr.slice(-k);

    console.log(first.join(' '));
    console.log(last.join(' '));
}

firstAndLastKNumbers([2, 7, 8, 9]);
console.log('---');
firstAndLastKNumbers([3, 6, 7, 8, 9]);
