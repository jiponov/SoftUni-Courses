function sumFirstAndLast(input) {    // 100/100

    let sum = 0;

    for (let i = 0; i < input.length; i++) {
        if (i == 0) {
            sum += Number(input[i])
        } else if (i == input.length - 1) {
            sum += Number(input[i])
        }
    }

    return sum;
}
sumFirstAndLast(['20', '30', '40']);        // 60
console.log('-------');
sumFirstAndLast(['5', '10']);               // 15
