function solve(n) {

    for (let i = 1; i <= n; i++) {
        let iAsString = String(i);
        let result = 0;

        for (let j = 0; j <= iAsString.length - 1; j++) {
            result += Number(iAsString[j]);
        }

        let isSpecial = false;

        if (result === 5 || result === 7 || result === 11) {
            isSpecial = true;
        }

        if (isSpecial) {
            console.log(`${i} -> True`)
        } else if (!isSpecial) {
            console.log(`${i} -> False`)
        }
    }
}
solve(15)