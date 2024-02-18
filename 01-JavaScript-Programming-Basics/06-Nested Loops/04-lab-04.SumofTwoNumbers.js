function solve(input) {

    let start = Number(input[0]);
    let end = Number(input[1]);
    let magicNum = Number(input[2]);
    let counter = 0;
    let isFound = false;

    for (let i = start; i <= end; i++) {
        for (let j = start; j <= end; j++) {
            let sum = i + j;
            counter++;
            if (sum == magicNum) {
                isFound = true;
                console.log(`Combination N:${counter} (${i} + ${j} = ${magicNum})`);
                break;
            }
        }

        if (isFound) {
            break;
        }
    }

    if (!isFound) {
        console.log(`${counter} combinations - neither equals ${magicNum}`);
    }
}
solve(["1",
    "10",
    "5"])


