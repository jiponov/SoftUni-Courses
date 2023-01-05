function solve(num1, num2, operator) {
    let result = 0;
    switch (operator) {
        case 'add': result = num1 + num2; break;
        case 'subtract': result = num1 - num2; break;
        case 'multiply': result = num1 * num2; break;
        case 'divide': result = num1 / num2; break;
    }
    console.log(result)
}

solve(5, 5, 'multiply');
solve(40, 8, 'divide');
solve(12, 19, 'add');
solve(50, 13, 'subtract');