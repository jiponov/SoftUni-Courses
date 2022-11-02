function solve(input) {

    let fen = input[0];
    let budget = Number(input[1]);
    let bottlesOfBeer = Number(input[2]);
    let packagesChips = Number(input[3]);

    let moneyBeers = bottlesOfBeer * 1.20;
    let moneyChips = Math.ceil(packagesChips * (0.45 * moneyBeers));
    let money = moneyBeers + moneyChips;
    let diff = Math.abs(budget - money);

    if (budget >= money) {
        console.log(`${fen} bought a snack and has ${diff.toFixed(2)} leva left.`)
    } else {
        console.log(`${fen} needs ${diff.toFixed(2)} more leva!`);
    }
}

solve(["George",
    "10",
    "2",
    "3"]);

solve(["Valentin",
    "5",
    "2",
    "4"]);