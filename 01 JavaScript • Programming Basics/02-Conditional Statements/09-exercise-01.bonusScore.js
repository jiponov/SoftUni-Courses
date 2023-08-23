function solve(input) {

    let num = Number(input[0]);
    let bonus = 0;

    if (num <= 100) {
        bonus += 5;
    } else if (num <= 1000) {
        bonus += 0.2 * num;
    } else if (num > 1000) {
        bonus += 0.1 * num;
    }

    if (num % 2 === 0) {
        bonus += 1;
    }

    if (num % 10 === 5) {
        bonus += 2;
    }

    console.log(bonus);
    console.log(num + bonus);

}
solve((["20"]));