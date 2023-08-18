function diagonalSums(matrix) {    // 100/100

    let sumLeft = 0;
    let sumRight = 0;

    for (let i = 0; i < matrix.length; i++) {
        sumLeft += matrix[i][i];
        sumRight += matrix[i][(matrix.length - 1) - i];
    }

    console.log(sumLeft + ' ' + sumRight);
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