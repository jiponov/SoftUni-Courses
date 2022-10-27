function combinations(input) {                      

    let num = Number(input[0]);
    let combinations = 0;
    for (let i = 0; i <= num; i++) {
        for (let j = 0; j <= num; j++) {
            for (let k = 0; k <= num; k++) {
                let sum = i + j + k;
                if (sum == num) {
                    combinations++;
                }
            }
        }
    }
    console.log(`${combinations}`);
}
combinations(["25"]);

