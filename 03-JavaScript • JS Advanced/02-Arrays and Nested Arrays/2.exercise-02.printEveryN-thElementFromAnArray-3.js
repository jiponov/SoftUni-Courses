function printEveryNthElementFromAnArray(arr, n) {    // 100/100

    // create the result array to push the valid values
    const result = [];

    // loop and get the valid values
    for (let i = 0; i < arr.length; i += n) {
        result.push(arr[i]);
    }

    // return the result array
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
