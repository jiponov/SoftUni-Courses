function numbers(input) {          // 100/100
    let numbers = input.split(' ').map(Number);
    let numbersSum = numbers.reduce((a, v) => a + v, 0);
    let avgNum = numbersSum / numbers.length;

    let biggest = numbers
        .filter(el => el > avgNum)
        .sort((a, b) => b - a)

    let result = [];
    let counter = 0;

    for (let el of biggest) {

        result.push(el);
        counter++;

        if (counter == 5) {
            break;                      // boolean break method top 5
        }
    }


    if (result.length > 0) {
        console.log(`${result.join(' ')}`);
    } else {
        console.log(`No`);
    }
}

numbers('10 20 30 40 50');
console.log('-------');
numbers('5 2 3 4 -10 30 40 50 20 50 60 60 51');
console.log('-------');
numbers('1');
console.log('-------');
numbers('-1 -2 -3 -4 -5 -6');
