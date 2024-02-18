function reverseAnArrayOfNumbers(n, arr) {
    // Use push() to add elements inside the new array
    // Use string interpolation for the output

    let newArr = [];
    for (let i = 0; i < n; i++) {
        newArr.push(arr[i]);
    }

    let newArrL = newArr.length;
    let output = '';
    for (let i = newArrL - 1; i >= 0; i--) {
        output += `${newArr[i]} `;
    }
    console.log(output);
}

reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50]);
reverseAnArrayOfNumbers(4, [-1, 20, 99, 5]);
