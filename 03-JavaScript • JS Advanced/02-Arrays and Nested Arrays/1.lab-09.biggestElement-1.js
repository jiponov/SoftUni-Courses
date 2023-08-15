function biggestElement(matrix) {    // 100/100

    let biggest = [];

    for (let row of matrix) {
        let sorted = row.sort((a, b) => b - a).slice(0, 1)
        biggest.push(sorted[0])
    }
    // console.log(Math.max(...biggest));
    // console.log(matrix);
    return Math.max(...biggest);
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

