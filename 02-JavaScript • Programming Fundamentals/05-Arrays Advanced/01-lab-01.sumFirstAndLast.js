function sumFirstAndLast(arr) {

    let first = Number(arr.shift());
    let last = Number(arr.pop());
    let sum = first + last;
    console.log(sum);
}

sumFirstAndLast(['20', '30', '40']);
sumFirstAndLast(['5', '10']);
sumFirstAndLast(['3']); 