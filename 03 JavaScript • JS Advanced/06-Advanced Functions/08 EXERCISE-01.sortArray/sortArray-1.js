function sortArray(arr, str) {      // 100/100

    let output = arr
        .sort((a, b) => {
            if (str == 'asc') {
                return a - b;
            } else if (str == 'desc') {
                return b - a;
            }
        });

    return output;
    // console.log(output);
}

sortArray([14, 7, 17, 6, 8], 'asc');        // [6, 7, 8, 14, 17]
console.log('---');
sortArray([14, 7, 17, 6, 8], 'desc');       // [17, 14, 8, 7, 6]