function processOddPositions(input) {    // 100/100

    const odd = input.filter((x, i) => i % 2);
    const doubled = odd.map(x => x * 2);
    doubled.reverse();

    return doubled.join(' ');
}

console.log(processOddPositions([10, 15, 20, 25]));
console.log(processOddPositions([3, 0, 10, 4, 7, 3]));