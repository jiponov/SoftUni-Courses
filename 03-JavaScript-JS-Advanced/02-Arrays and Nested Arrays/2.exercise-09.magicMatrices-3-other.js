function magicMatrices(matrix) {    // 100/100

    for (let i = 0; i < matrix.length - 1; i++) {
        let sumRow1 = matrix[i].reduce((a, b) => a + b, 0);
        let sumRow2 = matrix[i + 1].reduce((a, b) => a + b, 0);

        let sumColumn1 = 0;
        let sumColumn2 = 0;

        for (let j = 0; j < matrix.length; j++) {
            sumColumn1 += matrix[i][j];
            sumColumn2 += matrix[i + 1][j];
        }

        if (sumRow1 !== sumRow2 || sumColumn1 !== sumColumn2) {
            return false;
        }
    }

    return true;
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
