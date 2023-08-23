function sumOfNumbersNM(a, b) {    // 100/100
    let result = 0;
    a = Number(a);
    b = Number(b);
    for (let i = a; i <= b; i++) {
        result += i;
    }
    console.log(result);
}

sumOfNumbersNM('1', '5');
console.log('-------');
sumOfNumbersNM('-8', '20');