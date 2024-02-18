function palindromeIntegers(arr) {

    for (let i = 0; i < arr.length; i++) {
        let current = String(arr[i]);
        let counter = 0;
        for (let j = 0; j < current.length / 2; j++) {
            let k = current.length - 1 - j;
            if (current[j] == current[k]) {
            } else {
                counter++;
            }
        }
        if (counter > 0) {
            console.log('false');
        } else {
            console.log('true')
        }
    }
}

palindromeIntegers([123, 323, 421, 121]);
console.log('---')
palindromeIntegers([32, 2, 232, 1010]);
