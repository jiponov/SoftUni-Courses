function solve(input) {

    let n = Number(input[0]);

    for (let i = 1; i <= 10; i++) {
        let digit = i * n;
        console.log(`${i} * ${n} = ${digit}`);
    }

}
solve(["5"]);