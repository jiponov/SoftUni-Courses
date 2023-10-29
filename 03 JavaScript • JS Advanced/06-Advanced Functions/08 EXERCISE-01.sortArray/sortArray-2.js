function sortArray(arr, type) {      // 100/100

    const methods = {
        asc: (a, b) => a - b,
        desc: (a, b) => b - a,
    };

    arr.sort(methods[type]);

    return arr;
}

sortArray([14, 7, 17, 6, 8], 'asc');        // [6, 7, 8, 14, 17]
console.log('---');
sortArray([14, 7, 17, 6, 8], 'desc');       // [17, 14, 8, 7, 6]