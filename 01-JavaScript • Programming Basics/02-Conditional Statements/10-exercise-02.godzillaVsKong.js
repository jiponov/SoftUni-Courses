function solve(input) {

    let budget = Number(input[0]);
    let statists = Number(input[1]);
    let clothPricePerOne = Number(input[2]);

    let decorMovie = budget * 0.1;
    let clothPriceAll = clothPricePerOne * statists;

    if (statists > 150) {
        clothPriceAll *= 0.9;
    }

    let money = decorMovie + clothPriceAll;

    let costs = budget - money;
    let diff = Math.abs(budget - money);

    if (costs < 0) {
        console.log(`Not enough money!`);
        console.log(`Wingard needs ${diff.toFixed(2)} leva more.`);
    } else {
        console.log(`Action!`);
        console.log(`Wingard starts filming with ${diff.toFixed(2)} leva left.`);
    }

}
solve(["20000", "120", "55.5"]);