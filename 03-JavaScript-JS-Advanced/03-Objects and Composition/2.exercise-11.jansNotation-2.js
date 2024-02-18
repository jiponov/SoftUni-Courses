function jansNotation(input) {    // 100/100
    let nums = [];

    input.forEach((n, i) => {
        if (+n) {
            nums.push(+n);
        } else {
            apply(nums, input[i]);
        }
    });

    if (nums.length >= 2) {
        console.log('Error: too many operands!');
    } else if (nums.length !== 0) {
        console.log(nums.join(' '));
    };

    function apply(operand, operator) {
        if (operand.length < 2) {
            console.log('Error: not enough operands!');
        }
        if (operator === '+') {
            operand[operand.length - 2] = operand[operand.length - 2] + operand[operand.length - 1];
            operand.splice(-1, 1);
        } else if (operator === '-') {
            operand[operand.length - 2] = operand[operand.length - 2] - operand[operand.length - 1];
            operand.splice(-1, 1);
        } else if (operator === '*') {
            operand[operand.length - 2] = operand[operand.length - 2] * operand[operand.length - 1];
            operand.splice(-1, 1);
        } else if (operator === '/') {
            operand[operand.length - 2] = operand[operand.length - 2] / operand[operand.length - 1];
            operand.splice(-1, 1);
        };
    };
};

jansNotation([3, 4, '+']);
jansNotation([5, 3, 4, '*', '-']);
jansNotation([7, 33, 8, '-']);
jansNotation([15, '/']);
jansNotation([31, 2, '+', 11, '/']);