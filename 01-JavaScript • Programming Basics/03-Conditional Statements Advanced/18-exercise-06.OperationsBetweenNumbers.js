function solve(input) {

    let num1 = Number(input[0]);
    let num2 = Number(input[1]);
    let operator = input[2];

    let calculation = 0;
    let result = 0;

    if (operator === '+' || operator === '-' || operator === '*') {
        switch (operator) {
            case '+': calculation = num1 + num2; break;
            case '-': calculation = num1 - num2; break;
            case '*': calculation = num1 * num2; break;
        }
        if (calculation % 2 === 0) {
            result = 'even'
        } else {
            result = 'odd'
        }
        console.log(`${num1} ${operator} ${num2} = ${calculation} - ${result}`)
    }

    if (operator === '/') {
        calculation = num1 / num2;
        if (num2 === 0) {
            console.log(`Cannot divide ${num1} by zero`);
        } else {
            console.log(`${num1} / ${num2} = ${calculation.toFixed(2)}`)
        }
    }

    if (operator === '%') {
        calculation = num1 % num2;
        if (num2 === 0) {
            console.log(`Cannot divide ${num1} by zero`);
        } else {
            console.log(`${num1} % ${num2} = ${calculation}`)
        }
    }
}
solve(["7",
    "3",
    "*"])





