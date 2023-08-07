function evenPositionElement(input) {    // 100/100

    let result = '';

    for (let i = 0; i < input.length; i += 2) {
        result += input[i];
        result += ' ';                      // add space after number
    }

    console.log(result);
}

evenPositionElement(['20', '30', '40', '50', '60']);
console.log('-------');
evenPositionElement(['5', '10']);

