function sameNumbers(num) {    // 100/100

    console.log(num.toString().split('').every((el, i, arr) => (el == arr[0])));
    console.log(num.toString().split('').map(Number).reduce((a, v) => a + v, 0));
}

sameNumbers(2222222);
console.log('-------');
sameNumbers(1234);