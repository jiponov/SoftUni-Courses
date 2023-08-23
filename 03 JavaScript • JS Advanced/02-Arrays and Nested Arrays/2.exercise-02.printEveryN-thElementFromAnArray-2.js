function printEveryNthElementFromAnArray(arr, n) {    // 100/100

    return arr.filter((x, i) => i % n === 0);
}

console.log(printEveryNthElementFromAnArray([
    '5',
    '20',
    '31',
    '4',
    '20'],
    2));
console.log('-------');
console.log(printEveryNthElementFromAnArray([
    'dsa',
    'asd',
    'test',
    'tset'],
    2));
console.log('-------');
console.log(printEveryNthElementFromAnArray([
    '1',
    '2',
    '3',
    '4',
    '5'],
    6));
