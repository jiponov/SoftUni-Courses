function printResult(input) {

    let arrOfNumbers = input;
    let inputL = arrOfNumbers.length;

    let isPalindrome = (num) => {
        let startNum = num;
        let reversedNum = Number(num.toString().split('').reverse().join(''));

        if (startNum === reversedNum) {
            return 'true';
        } else {
            return 'false';
        }
    }

    for (let i = 0; i < inputL; i++) {
        let current = arrOfNumbers[i];
        console.log(isPalindrome(current))
    }

}

printResult([123, 323, 421, 121]);
console.log('---')
printResult([32, 2, 232, 1010]);