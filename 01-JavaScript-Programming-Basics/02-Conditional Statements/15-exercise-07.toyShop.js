function solve(input) {

    let excursion = Number(input[0]);
    let puzzle = Number(input[1]);
    let dolls = Number(input[2]);
    let bears = Number(input[3]);
    let minions = Number(input[4]);
    let cars = Number(input[5]);

    let count = puzzle + dolls + bears + minions + cars;
    let price = puzzle * 2.60 + dolls * 3 + bears * 4.1 + minions * 8.2 + cars * 2;


    if (count >= 50) {
        price *= 0.75;
    }

    let rent = price * 0.1;
    let totalSum = price - rent;
    let diff = Math.abs(excursion - totalSum);

    if (excursion <= totalSum) {
        console.log(`Yes! ${diff.toFixed(2)} lv left.`)
    } else {
        console.log(`Not enough money! ${diff.toFixed(2)} lv needed.`)
    }
}
solve(["40.8", "20", "25", "30", "50", "10"]);