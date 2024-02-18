function greatestCommonDivisor(a, b) {    // 100/100

    let result = []
    let lowest = Math.min(a, b)

    for (let i = 1; i <= lowest; i++) {
        if (a % i == 0 && b % i == 0) {
            result.push(i)
        }
    }

    console.log(Math.max(...result));
}

greatestCommonDivisor(15, 5);
console.log('-------');
greatestCommonDivisor(2154, 458);
