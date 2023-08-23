function solve(number, power) {

    let res = 1;
    for (let i = 1; i <= power; i++) {
        res *= number;
    }
    console.log(res)

}

solve(2, 8);
solve(3, 4);