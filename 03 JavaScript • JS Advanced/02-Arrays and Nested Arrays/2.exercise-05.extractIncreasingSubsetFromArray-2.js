function extractIncreasingSubsetFromArray(arr) {    // 100/100
    let biggestNumber = Number.MIN_SAFE_INTEGER;

    let result = arr.reduce((a, v) => {
        if (v >= biggestNumber) {
            biggestNumber = v
            a.push(biggestNumber);
        }
        return a;
    }, []);

    return result;
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