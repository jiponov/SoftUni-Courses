function equalNeighbors(matrix) {    // 100/100

    let equalPairs = 0;

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {

            if (i < matrix.length - 1) {
                if (matrix[i][j] == matrix[i + 1][j]) {
                    equalPairs++
                }
            }

            if (j < matrix[i].length) {
                if (matrix[i][j] == matrix[i][j + 1]) {
                    equalPairs++;
                }
            }
        }
    }

    return equalPairs;
}

equalNeighbors([                        // 1
    ['2', '3', '4', '7', '0'],
    ['4', '0', '5', '3', '4'],
    ['2', '3', '5', '4', '2'],
    ['9', '8', '7', '5', '4']
]);
console.log('-------');
equalNeighbors([                        // 2
    ['test', 'yes', 'yo', 'ho'],
    ['well', 'done', 'yo', '6'],
    ['not', 'done', 'yet', '5']
]);
