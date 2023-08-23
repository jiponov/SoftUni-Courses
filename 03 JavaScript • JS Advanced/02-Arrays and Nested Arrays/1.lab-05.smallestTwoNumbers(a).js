function smallestTwoNumbers(inputArr) {    // 100/100

    // sort the array and take the first two smallest values
    let result = inputArr.sort((a, b) => a - b).splice(0, 2)

    // print the output
    console.log(result.join(' '));
}

smallestTwoNumbers([30, 15, 50, 5]);
console.log('-------');
smallestTwoNumbers([3, 0, 10, 4, 7, 3]);