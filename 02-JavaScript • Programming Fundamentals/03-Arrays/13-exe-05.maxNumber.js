function maxNumber(arr) {

    let newArr = [];
    let arrL = arr.length;

    for (let i = 0; i < arrL; i++) {
        let isBiggest = true;
        let num1 = arr[i];

        for (let j = i + 1; j < arrL; j++) {
            let num2 = arr[j];
            if (num1 <= num2) {
                isBiggest = false;
            }
        }
        if (isBiggest) {
            newArr.push(num1);
        }

    }

    console.log(newArr.join(' '));
}

maxNumber([1, 4, 3, 2]);
maxNumber([14, 24, 3, 19, 15, 17]);
maxNumber([41, 41, 34, 20]);
maxNumber([27, 19, 42, 2, 13, 45, 48]);

