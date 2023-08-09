function sumFirstAndLast(input) {    // 100/100

    let first = [...input].shift();     // let first = input[0]
    let second = [...input].pop();      // let second = input[input.length-1]

    let result = Number(first) + Number(second);
    return result;
}

sumFirstAndLast(['20', '30', '40']);        // 60
console.log('-------');
sumFirstAndLast(['5', '10']);               // 15

