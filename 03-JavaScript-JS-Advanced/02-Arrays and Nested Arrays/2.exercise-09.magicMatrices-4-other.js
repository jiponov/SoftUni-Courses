function magicMatrices(matrix) {    // 100/100

    const reducer = (a, v) => a + v;
    let sum = matrix[0].reduce(reducer);

    for (let row = 0; row < matrix.length; row++) {
        let rowSum = matrix[row].reduce(reducer);

        if (rowSum !== sum) {
            return false;
        }

        if (row === 0) {
            for (let col = 0; col < matrix[row].length; col++) {
                let columSum = 0;

                for (let i = 0; i < matrix.length; i++) {
                    columSum += matrix[col][i];
                }

                if (columSum !== sum) {
                    return false;
                }
            }
        }
    }

    return true;
}

console.log(magicMatrices([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]));
console.log('-------');
console.log(magicMatrices([
    [11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]));
console.log('-------');
console.log(magicMatrices([
    [1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]));
