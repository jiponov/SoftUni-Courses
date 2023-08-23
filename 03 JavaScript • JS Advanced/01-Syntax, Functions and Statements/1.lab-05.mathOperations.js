function mathOperations(a, b, operator) {    // 100/100

    let result;
    if (operator == '+') {
        result = a + b;
    } else if (operator == '-') {
        result = a - b;
    } else if (operator == '/') {
        result = a / b;
    } else if (operator == '*') {
        result = a * b;
    } else if (operator == '%') {
        result = a % b;
    } else if (operator == '**') {
        result = a ** b;
    }

    console.log(result)
}

mathOperations(5, 6, '+');
console.log('-------');
mathOperations(3, 5.5, '*');