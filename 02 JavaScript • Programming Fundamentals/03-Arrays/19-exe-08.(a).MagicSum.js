function magicSum(arr, unique) {
    let result = '';
    for (let i = 0; i < arr.length; i++) {
        let num1 = arr[i];

        for (let j = i + 1; j < arr.length; j++) {
            let num2 = arr[j];
            let output = num1 + num2;
            if (output === unique) {
                result += `${num1} ${num2}\n`
            }
        }
    }
    console.log(result);

}

magicSum([1, 7, 6, 2, 19, 23], 8);
console.log('---');
magicSum([14, 20, 60, 13, 7, 19, 8], 27);
console.log('---');
magicSum([1, 2, 3, 4, 5, 6], 6);
