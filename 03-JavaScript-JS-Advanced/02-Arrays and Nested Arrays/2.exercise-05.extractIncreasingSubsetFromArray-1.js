function extractIncreasingSubsetFromArray(arr) {    // 100/100
    // create new array with first element from input array (arr)
    const result = [arr[0]];

    let biggestNumber = arr[0];

    for (let i = 1; i < arr.length; i++) {
        const current = arr[i];

        if (current >= biggestNumber) {
            result.push(current);
            biggestNumber = current;
        }
    }

    return result
}

console.log(extractIncreasingSubsetFromArray([
    1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]));
console.log('-------');
console.log(extractIncreasingSubsetFromArray([
    1,
    2,
    3,
    4]));
console.log('-------');
console.log(extractIncreasingSubsetFromArray([
    20,
    3,
    2,
    15,
    6,
    1]));