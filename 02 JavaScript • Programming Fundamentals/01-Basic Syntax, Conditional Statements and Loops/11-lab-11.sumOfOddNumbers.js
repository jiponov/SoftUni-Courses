function sumOfOddNumbers(num) {

    let sum = 0;
    let max = Number.MAX_SAFE_INTEGER;
    let counter = 0;

    for (let i = 1; i <= max; i += 2) {
        if (i % 2 != 0) {
            sum += i;
            counter++;
            console.log(i);
            if (counter === num) {
                break;
            }
        }
    }
    console.log(`Sum: ${sum}`);
}
sumOfOddNumbers(5);
sumOfOddNumbers(3);