function integerAndFloat(num1, num2, num3) {

    let sum = num1 + num2 + num3;
    let flag = 'Integer';
    let roundedSum = Math.ceil(sum);

    if (sum != roundedSum) {
        flag = 'FLoat';
        console.log(`${sum} - Float`);
    } else {
        flag = 'Integer';
        console.log(`${sum} - Integer`);
    }
}
integerAndFloat(9, 100, 1.1);
integerAndFloat(100, 200, 303);