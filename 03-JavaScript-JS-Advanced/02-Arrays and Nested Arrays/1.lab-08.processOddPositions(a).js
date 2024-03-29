function processOddPositions(input) {    // 100/100

    let result = input
        .filter((x, i) => i % 2 != 0)
        .map(x => x * 2)
        .reverse()

    return result.join(' ');
}

console.log(processOddPositions([10, 15, 20, 25]));
console.log(processOddPositions([3, 0, 10, 4, 7, 3]));