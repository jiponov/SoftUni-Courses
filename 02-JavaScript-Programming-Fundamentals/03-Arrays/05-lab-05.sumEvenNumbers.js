function sumEvenNumbers(inputArr) {

    let sum = 0;
    for (let i = 0; i < inputArr.length; i++) {
        let currentAsNumber = Number(inputArr[i]);
        if (currentAsNumber % 2 === 0) {
            sum += currentAsNumber;
        }
    }
    console.log(sum);
}

sumEvenNumbers(['1', '2', '3', '4', '5', '6']);
sumEvenNumbers(['3', '5', '7', '9']);
sumEvenNumbers(['2', '4', '6', '8', '10']);
