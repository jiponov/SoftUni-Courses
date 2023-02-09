function numbers(inputArr) {          // 100/100
    let arr = inputArr.slice();
    let splitted = arr.split(' ').map(Number);
    let sum = 0;
    //console.log(splitted);

    for (let el of splitted) {
        sum += Number(el);
    }

    let avg = sum / splitted.length;
    let resultArr = [];
    for (let el of splitted) {
        if (el > avg) {
            resultArr.unshift(el);
        }
    }

    resultArr.sort((a, b) => b - a);
    if (resultArr.length == 0) {
        console.log('No');
    } else {
        let outputArr = resultArr.slice(0, 5);  // slice method top 5
        console.log(outputArr.join(' '));
    }
}

numbers('10 20 30 40 50');
console.log('-------');
numbers('5 2 3 4 -10 30 40 50 20 50 60 60 51');
console.log('-------');
numbers('1');
console.log('-------');
numbers('-1 -2 -3 -4 -5 -6');