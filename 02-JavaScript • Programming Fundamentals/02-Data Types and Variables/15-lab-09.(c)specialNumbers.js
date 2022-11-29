function solve(n) {

    let i = 1;
    while (i <= n) {
        let result = 0;
        let iAsString = String(i);

        for (let j = 0; j < iAsString.length; j++) {
            result += Number(iAsString[j]);
        }

        let flag = false;

        if (result === 5 || result === 7 || result === 11) {
            flag = true;
        }


        if (flag) {
            console.log(`${i} -> True`)
        } else {
            console.log(`${i} -> False`)
        }
        i++;
    }
}

solve(15);