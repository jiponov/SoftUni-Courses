function sumFirstAndLast(input) {    // 100/100

    const first = Number(input[0]);
    const last = Number(input[input.length - 1]);
    return first + last;
}

sumFirstAndLast(['20', '30', '40']);        // 60
console.log('-------');
sumFirstAndLast(['5', '10']);               // 15
