function aggregateElements(arr) {    // 100/100

    const sum = arr.reduce((a, v) => a + v, 0);
    console.log(sum);

    const inverse = arr.map(element => 1 / element).reduce((a, v) => a + v, 0);
    console.log(inverse);

    const concat = arr.join('');
    console.log(concat);
}

aggregateElements([1, 2, 3]);
console.log('-------');
aggregateElements([2, 4, 8, 16]);