function diagonalSums(matrix) {    // 100/100
    let main = 0                                        // left to right diagonal   // row (i)
    let secondary = 0;                                  // right to left diagonal   // row   // col = length - row - 1

    for (let i = 0; i < matrix.length; i++) {
        main += matrix[i][i];                           //  left to right diagonal
        secondary += matrix[i][matrix.length - i - 1];  //  right to left diagonal
    }

    console.log(main + ' ' + secondary);
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