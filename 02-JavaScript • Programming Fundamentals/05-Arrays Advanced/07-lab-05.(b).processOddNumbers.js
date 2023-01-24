function processOddNumbers(arr) {
    // filter only elements at odd positions (index)
    // double filtered values
    // reverse resulting array
    // print result

    let result = arr.filter((x, i) => i % 2 == 1).map(x => x * 2).reverse();    // chaining methods
    console.log(result.join(' '));
}

processOddNumbers([10, 15, 20, 25]);
console.log('-----');
processOddNumbers([3, 0, 10, 4, 7, 3]);