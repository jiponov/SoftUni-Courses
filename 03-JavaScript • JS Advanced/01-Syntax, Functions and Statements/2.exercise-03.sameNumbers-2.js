function sameNumbers(num) {    // 100/100

    let input = String(num);
    let first = input[0];
    let isSame = true;
    let sum = 0;

    for (let el of input) {
        sum += Number(el);
        if (el != first) {
            isSame = false;
        }
    }

    console.log(isSame);
    console.log(sum);
}

sameNumbers(2222222);
console.log('-------');
sameNumbers(1234);
sameNumbers(2222232);