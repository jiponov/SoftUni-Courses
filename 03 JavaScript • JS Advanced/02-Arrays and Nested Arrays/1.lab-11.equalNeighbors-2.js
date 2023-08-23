function equalNeighbors(matrix) {    // 100/100

    // create variable to count the equal pairs
    let equalNeighbors = 0;

    // check vertical
    // loop the length of the first nested array
    for (let i = 0; i < matrix[0].length; i++) {

        // loop the main array length
        for (let j = 0; j < matrix.length; j++) {

            // if the previous element is valid, break
            if (j == matrix.length - 1)
                break;

            // check if both elements are equal
            if (matrix[j][i] == matrix[j + 1][i]) {
                equalNeighbors++;
            }
        }
    }

    // check diagonal
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] == matrix[i][j + 1]) {
                equalNeighbors++;
            }
        }
    }

    // return the result of the function
    return equalNeighbors;
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
