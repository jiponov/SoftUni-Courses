function evenPositionElement(input) {    // 100/100

    let result = [];

    for (let i = 0; i < input.length; i += 2) {
        result[result.length] = input[i];
    }

    console.log(result.join(' '));
}

evenPositionElement(['20', '30', '40', '50', '60']);
console.log('-------');
evenPositionElement(['5', '10']);

