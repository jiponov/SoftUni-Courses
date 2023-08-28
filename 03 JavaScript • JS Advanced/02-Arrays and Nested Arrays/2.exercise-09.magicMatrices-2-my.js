function magicMatrices(matrix) {    // 100/100

    let target = matrix[0].reduce((a, b) => a + b, 0);
    let isEqual = true;

    let sumRow = 0;
    let sumColumn = 0;

    for (let row = 0; row < matrix.length; row++) {
        sumRow = matrix[row].reduce((a, b) => a + b, 0);

        if (sumRow != target) {
            isEqual = false;
            break;
        }

        sumRow = 0;

        for (let col = 0; col < matrix.length; col++) {
            sumColumn += matrix[col][row];
        }

        if (sumColumn !== target) {
            isEqual = false;
            break;
        }

        sumColumn = 0;
    }

    if (isEqual) {
        return true;
    } else {
        return false;
    }
}

console.log(magicMatrices([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]
]));
console.log('-------');
console.log(magicMatrices([
    [11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]
]));
console.log('-------');
console.log(magicMatrices([
    [1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]
]));
