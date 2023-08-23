function searchForANumber(inputArr1, inputArr2) {
    let arr = inputArr1.slice();
    let takeNum = Number(inputArr2[0]);
    let deleteCount = Number(inputArr2[1]);
    let searchNum = Number(inputArr2[2]);

    let myArr = arr.slice(0, takeNum)

    myArr.splice(0, deleteCount)

    let counter = 0;
    let indexOfNum = myArr.indexOf(searchNum);

    while (indexOfNum != -1) {
        counter++;
        myArr.splice(indexOfNum, 1);
        indexOfNum = myArr.indexOf(searchNum);
    }
    console.log(`Number ${searchNum} occurs ${counter} times.`);
}

searchForANumber([5, 2, 3, 4, 1, 6], [5, 2, 3]);
searchForANumber([7, 1, 5, 8, 2, 7], [3, 1, 5]);
searchForANumber([5, 5, 5, 8, 2, 7], [3, 1, 5]);