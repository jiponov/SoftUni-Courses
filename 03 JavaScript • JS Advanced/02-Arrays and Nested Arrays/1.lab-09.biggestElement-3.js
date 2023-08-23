function biggestElement(matrix) {    // 100/100

    let biggest = Number.MIN_SAFE_INTEGER;

    for (let row = 0; row < matrix.length; row++) {
        for (let cell = 0; cell < matrix[row].length; cell++) {
            if (Number(matrix[row][cell]) > biggest) {
                biggest = Number(matrix[row][cell]);
            }
        }
    }

    return biggest;
}

biggestElement([
    [20, 50, 10],
    [8, 33, 145]
]);
console.log('-------');
biggestElement([
    [3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]
]);

