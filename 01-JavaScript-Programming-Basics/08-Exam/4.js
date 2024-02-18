function solve(input) {

    let n = Number(input[0]);
    let m = Number(input[1]);
    let s = Number(input[2]);

    let print = "";
    let isFound = false;

    for (let i = m; i >= n; i--) {
        if (isFound) {
            break;
        }

        let temp = i;

        if (temp % 2 == 0 && temp % 3 == 0 && temp == s) {
            isFound = true;
            continue;
        } else if (temp % 2 == 0 && temp % 3 == 0) {
            print += temp + " ";
        }
    }

    console.log(`${print}`);
}

solve(["1",
    "30",
    "15"]);

solve(["1",
    "36",
    "12"]);