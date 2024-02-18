function diagonalSums(matrix) {    // 100/100

    let leftDiagonal = 0;
    let rightDiagonal = 0;

    for (let row = 0; row < matrix.length; row++) {
        for (let cell = 0; cell < matrix[row].length; cell++) {
            if (row == cell) {
                leftDiagonal += Number(matrix[row][cell]);
                let el = matrix[row].length - row - 1;
                rightDiagonal += Number(matrix[row][el]);
            }
        }
    }

    console.log(`${leftDiagonal} ${rightDiagonal}`);
}

diagonalSums([
    [20, 40],
    [10, 60]
]);
console.log('-------');
diagonalSums([
    [3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]
]);