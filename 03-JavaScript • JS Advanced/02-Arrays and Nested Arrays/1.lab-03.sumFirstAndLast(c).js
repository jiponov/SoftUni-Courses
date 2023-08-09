function sumFirstAndLast(input) {    // 100/100

    return Number(input.pop()) + Number(input.shift());
}

sumFirstAndLast(['20', '30', '40']);        // 60
console.log('-------');
sumFirstAndLast(['5', '10']);               // 15
