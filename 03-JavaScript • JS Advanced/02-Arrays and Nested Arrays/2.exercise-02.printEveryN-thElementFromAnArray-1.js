function printEveryNthElementFromAnArray(arr, n) {    // 100/100

    let result = [];

    for (let i = 0; i < arr.length; i++) {
        let current = arr[i];
        if (i == 0) {
            result.push(current);
        } else if (i % n == 0) {
            result.push(current);
        }
    }

    return result;
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
