function negativePositiveNumbers(inputArr) {    // 100/100

    let result = [];

    for (let el of inputArr) {
        if (el >= 0) {
            result.push(el);
        } else {
            result.unshift(el);
        }
    }

    console.log(result.join('\n'))
}

negativePositiveNumbers([7, -2, 8, 9]);
console.log('-------');
negativePositiveNumbers([3, -2, 0, -1]);