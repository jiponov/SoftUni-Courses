function addAndSubtract(a, b, c) {

    let sum = (a, b) => {
        return a + b;
    };

    let subtract = (sumAB, cNum) => {
        return sumAB - cNum;
    };


    let sumAB = sum(a, b);
    let finalResult = subtract(sumAB, c);

    console.log(finalResult);
}

addAndSubtract(23, 6, 10);

