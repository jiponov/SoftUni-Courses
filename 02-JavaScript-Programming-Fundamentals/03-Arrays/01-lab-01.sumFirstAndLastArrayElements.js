function sumFirstAndLastArrayElements(arr) {
    // You can access the last element in an array by subtracting 1 from its length:
    let sum = arr[0] + arr[arr.length - 1];
    console.log(sum);
}

sumFirstAndLastArrayElements([20, 30, 40]);

