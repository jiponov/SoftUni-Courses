function magicMatrices(matrix) {    // 100/100

    let isRows = true;
    let isColumns = true;

    let sumRow1 = 0;
    let sumRow2 = 0;
    let sumColumn1 = 0;
    let sumColumn2 = 0;

    for (let row = 0; row < matrix.length - 1; row++) {
        sumRow1 = matrix[row].reduce((a, b) => a + b, 0);
        sumRow2 = matrix[row + 1].reduce((a, b) => a + b, 0);

        if (sumRow1 !== sumRow2) {
            isRows = false;
            break;
        }

        sumRow1 = 0;
        sumRow2 = 0;


        for (let col = 0; col < matrix.length; col++) {
            sumColumn1 += matrix[col][row];
            sumColumn2 += matrix[col][row + 1];
        }

        if (sumColumn1 !== sumColumn2) {
            isColumns = false;
            break;
        }

        sumColumn1 = 0;
        sumColumn2 = 0;
    }


    if (isRows && isColumns) {
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
