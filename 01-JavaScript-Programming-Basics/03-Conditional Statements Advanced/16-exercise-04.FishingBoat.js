function solve(input) {

    let budget = Number(input[0]);
    let season = input[1];
    let fishmen = Number(input[2]);

    let price = 0;

    if (season === 'Spring') {
        price = 3000;
    } else if (season === 'Summer') {
        price = 4200;
    } else if (season === 'Autumn') {
        price = 4200;
    } else if (season === 'Winter') {
        price = 2600;
    }


    if (fishmen <= 6) {
        price = price * 0.90;
    } else if (fishmen >= 7 && fishmen <= 11) {
        price *= 0.85;
    } else if (fishmen >= 12) {
        price *= 0.75;
    }


    if (fishmen % 2 === 0 && season !== 'Autumn') {
        price = price * 0.95;
    }


    let left = Math.abs(budget - price);


    if (budget >= price) {
        console.log(`Yes! You have ${left.toFixed(2)} leva left.`);
    } else if (budget < price) {
        console.log(`Not enough money! You need ${left.toFixed(2)} leva.`);
    }

}

solve(["2000",
    "Winter",
    "13"])


/*

function solve(input) {

    let budget = Number(input[0]);
    let season = input[1];
    let fishmen = Number(input[2]);

    let rent = 0;
    let price = 0;

    if (season == 'Spring') {
        price = 3000;
    } else if (season == 'Summer' || season == 'Autumn') {
        price = 4200;
    } else if (season == 'Winter') {
        price = 2600;
    }

    if (fishmen <= 6) {
        price *= 0.90;
    } else if (fishmen > 6 && fishmen <= 11) {
        price *= 0.85;
    } else if (fishmen > 11) {
        price *= 0.75;
    }

    if ((fishmen % 2 === 0) && (season != 'Autumn')) {
        price *= 0.95;
    }

    let diff = Math.abs(budget - price);
    if (budget >= price) {
        console.log(`Yes! You have ${diff.toFixed(2)} leva left.`)
    } else {
        console.log(`Not enough money! You need ${diff.toFixed(2)} leva.`)
    }

}
solve(["2000",
"Winter",
"13"])

*/