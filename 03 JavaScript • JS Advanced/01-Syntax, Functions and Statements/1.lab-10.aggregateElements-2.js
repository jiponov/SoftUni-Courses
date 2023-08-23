function aggregateElements(arr) {    // 100/100

    const sum = arr.reduce((a, v) => a + v, 0);
    console.log(sum);

    let inverse = 0;
    arr.forEach(element => inverse += 1 / element);
    console.log(inverse);

    const concat = arr.join('');
    console.log(concat);
}

aggregateElements([1, 2, 3]);
console.log('-------');
aggregateElements([2, 4, 8, 16]);