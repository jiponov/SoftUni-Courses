function aggregateElements(arr) {    // 100/100

    let sum = 0;
    arr.forEach(element => {
        return sum += element;
    });
    console.log(sum)

    let inverse = 0;
    arr.forEach(element => {
        return inverse += 1 / element;
    });
    console.log(inverse);

    let concat = '';
    arr.forEach(element => {
        return concat += String(element);
    });
    console.log(concat);
}

aggregateElements([1, 2, 3]);
console.log('-------');
aggregateElements([2, 4, 8, 16]);