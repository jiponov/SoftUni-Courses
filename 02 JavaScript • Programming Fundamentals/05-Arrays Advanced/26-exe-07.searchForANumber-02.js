function searchForANumber(arr1, arr2) {
    countElementsToGetFromArr1 = arr2[0];
    countNumsToDeleteFromFirst = arr2[1];
    searchNumAfterManipulations = arr2[2];
    let counter = 0;
    let arr = arr1.splice(0, countElementsToGetFromArr1);
    arr.splice(0, countNumsToDeleteFromFirst);

    for (let i = 0; i < arr.length; i++) {
        let currentEle = arr[i];

        if (currentEle == searchNumAfterManipulations) {
            counter++;
        }
    }

    console.log(`Number ${searchNumAfterManipulations} occurs ${counter} times.`);
}

searchForANumber([5, 2, 3, 4, 1, 6], [5, 2, 3]);
searchForANumber([7, 1, 5, 8, 2, 7], [3, 1, 5]);
searchForANumber([5, 5, 5, 8, 2, 7], [3, 1, 5]);