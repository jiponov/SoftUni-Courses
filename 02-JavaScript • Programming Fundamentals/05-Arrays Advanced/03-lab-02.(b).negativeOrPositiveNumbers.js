function negativeOrPositiveNumbers(arr) {

    let newArr = [];
    for (let element of arr) {
        element = Number(element);
        if (element < 0) {
            newArr.unshift(element)
        } else {
            newArr.push(element)
        }
    }

    for (let element of newArr) {
        console.log(element)
    }
}

negativeOrPositiveNumbers(['7', '-2', '8', '9']);
console.log('---');
negativeOrPositiveNumbers(['3', '-2', '0', '-1']);