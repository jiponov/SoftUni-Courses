function addAndSubtract(inputArr) {
    let sumOriginalArr = 0;
    let sumModifiedArr = 0;
    let output = [];

    let inputArrL = inputArr.length;

    for (let i = 0; i < inputArrL; i++) {
        let temp;
        sumOriginalArr += inputArr[i];
        if (inputArr[i] % 2 === 0) {
            temp = inputArr[i] + i;
            output.push(temp);
        } else {
            temp = inputArr[i] - i;
            output.push(temp);
        }
    }

    let outputL = output.length;
    for (let i = 0; i < outputL; i++) {
        sumModifiedArr += output[i];
    }

    console.log(output);
    console.log(sumOriginalArr);
    console.log(sumModifiedArr);
}

addAndSubtract([5, 15, 23, 56, 35]);
addAndSubtract([-5, 11, 3, 0, 2]);

