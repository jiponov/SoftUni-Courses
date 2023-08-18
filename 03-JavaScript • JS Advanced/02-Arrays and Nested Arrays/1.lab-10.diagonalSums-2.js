function diagonalSums(matrix) {    // 100/100

    let [leftSum, rightSum] = [0, 0];

    for (let i = 0; i < matrix.length; i++) {
        leftSum += matrix[i][i];
        rightSum += matrix[i][matrix[0].length - 1 - i];
    }

    console.log(leftSum, rightSum);
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