function biggestElement(matrix) {    // 100/100

    let biggest = Math.max(...matrix.map(rowArray => Math.max(...rowArray)));
    //console.log(biggest)
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