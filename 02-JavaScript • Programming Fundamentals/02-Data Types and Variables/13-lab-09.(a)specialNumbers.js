function specialNumbers(n) {    // My Code

    for (let i = 1; i <= n; i++) {
        let sum = 0;
        sum += i;
        let sumAsString = String(sum);
        let sumL = sumAsString.length;
        let output = 0;

        for (let j = 0; j < sumL; j++) {
            output += Number(sumAsString[j]);
        }
        if (output === 5 || output === 7 || output === 11) {
            console.log(`${sum} -> True`);
        } else {
            console.log(`${sum} -> False`);
        }
    }
}
specialNumbers(20);

