function sumOfNumbersNM(a, b) {    // 100/100
    let result = 0;
    a = +(a);
    b = +(b);
    for (let i = a; i <= b; i++) {
        result += i;
    }

    return result;
}

sumOfNumbersNM('1', '5');
console.log('-------');
sumOfNumbersNM('-8', '20');