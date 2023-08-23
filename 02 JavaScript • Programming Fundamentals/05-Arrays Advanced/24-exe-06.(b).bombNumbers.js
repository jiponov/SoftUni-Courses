function bombNumbers(arr, bombArr) {
    let bombNum = bombArr[0];
    let power = bombArr[1];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === bombNum) {
            arr[i] = 0;
            for (let j = i; j >= i - power; j--) {
                arr[j] = 0;
            }
            for (let k = i; k <= i + power; k++) {
                arr[k] = 0;
            }
        }
    }

    let sum = 0;
    for (let l = 0; l < arr.length; l++) {
        sum += arr[l];
    }

    console.log(sum);
}

bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);
bombNumbers([1, 4, 4, 2, 8, 9, 1], [9, 3]);
bombNumbers([1, 7, 7, 1, 2, 3], [7, 1]);
bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]);