function smallestTwoNumbers(inputArr) {

    let smallArr = inputArr.sort((a, b) => a - b);
    let outputArr = smallArr.slice(0, 2);
    console.log(outputArr.join(' '));
}

smallestTwoNumbers([30, 15, 50, 5]);
console.log('-----');
smallestTwoNumbers([3, 0, 10, 4, 7, 3]);