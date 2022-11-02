function sumAndProduct(input) {

    let n = Number(input[0]);
    let flag = false;

    for (let a = 1; a <= 9; a++) {

        for (let b = 9; b >= a; b--) {

            for (let c = 0; c <= 9; c++) {

                for (let d = 9; d >= c; d--) {

                    let sumDigits = a + b + c + d;
                    let productionDigits = a * b * c * d;

                    if (sumDigits === productionDigits && n % 5 === 0) {
                        flag = true;
                        console.log(`${a}${b}${c}${d}`);
                        break;
                    }

                    if (Math.floor(productionDigits / sumDigits) === 3 && n % 3 === 0) {
                        flag = true;
                        console.log(`${d}${c}${b}${a}`);
                        break;
                    }
                }
                if (flag === true) {
                    break;
                }
            }
            if (flag === true) {
                break;
            }
        }
        if (flag === true) {
            break;
        }
    }
    if (flag === false) {
        console.log("Nothing found");
    }
}

sumAndProduct(["145"])