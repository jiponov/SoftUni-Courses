function reverseInPlace(arr) {

    for (let i = 0; i < arr.length / 2; i++) {
        let k = arr.length - 1 - i;
        let waiting = arr[i];
        arr[i] = arr[k];
        arr[k] = waiting;
    }
    console.log(arr.join(' '));
}

reverseInPlace(['a', 'b', 'c', 'd', 'e']);
reverseInPlace(['abc', 'def', 'hig', 'klm', 'nop']);
reverseInPlace(['33', '123', '0', 'dd']);

