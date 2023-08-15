function biggestElement(matrix) {    // 100/100

    let biggest = [];

    for (let rowIndex = 0; rowIndex < matrix.length; rowIndex++) {
        let row = matrix[rowIndex];
        let maxElementInRow;

        for (let cellIndex = 0; cellIndex < row.length; cellIndex++) {
            if (row[cellIndex] >= maxElementInRow) {
                maxElementInRow = row[cellIndex];
            } else if (maxElementInRow == undefined) {
                maxElementInRow = row[cellIndex];
            }
            //console.log(row[cellIndex]); // same as this down
            //console.log(matrix[rowIndex][cellIndex])
        }

        biggest.push(maxElementInRow);
    }

    console.log(Math.max(...biggest));
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