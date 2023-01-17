function perfectNumber(num) {
    let sumOfDivisors = 1;

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            sumOfDivisors += i;
        }
    }

    if (sumOfDivisors === num) {
        console.log(`We have a perfect number!`);
    } else {
        console.log(`It's not so perfect.`)
    }
}

perfectNumber(6);
console.log('---');
perfectNumber(28);
console.log('---');
perfectNumber(1236498); 
