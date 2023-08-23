function evenAndOddSubtraction(inputArr) {
    let sumEven = 0;
    let sumOdd = 0;
    for (let current of inputArr) {
        if (current % 2 === 0) {
            sumEven += current;
        } else {
            sumOdd += current;
        }
    }
    let diff = sumEven - sumOdd;
    console.log(diff);
}

evenAndOddSubtraction([1, 2, 3, 4, 5, 6]);
evenAndOddSubtraction([3, 5, 7, 9]);
evenAndOddSubtraction([2, 4, 6, 8, 10]);

