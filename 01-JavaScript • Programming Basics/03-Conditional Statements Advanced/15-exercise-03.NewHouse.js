function solve(input) {

    let typeFlowers = input[0];
    let countFlowers = Number(input[1]);
    let budget = Number(input[2]);

    let price = 0;

    switch (typeFlowers) {
        case "Roses": price = countFlowers * 5; break;
        case "Dahlias": price = countFlowers * 3.80; break;
        case "Tulips": price = countFlowers * 2.80; break;
        case "Narcissus": price = countFlowers * 3; break;
        case "Gladiolus": price = countFlowers * 2.5; break;
    }


    if (typeFlowers === 'Roses') {
        if (countFlowers > 80) {
            price = price * 0.9;
        }
    }
    if (typeFlowers === 'Dahlias') {
        if (countFlowers > 90) {
            price = price * 0.85;
        }
    }
    if (typeFlowers === 'Tulips') {
        if (countFlowers > 80) {
            price = price * 0.85;
        }
    }
    if (typeFlowers === 'Narcissus') {
        if (countFlowers < 120) {
            price = price * 1.15;
        }
    }
    if (typeFlowers === 'Gladiolus') {
        if (countFlowers < 80) {
            price = price * 1.20;
        }
    }


    let sum = Math.abs(budget - price);


    if (budget >= price) {
        console.log(`Hey, you have a great garden with ${countFlowers} ${typeFlowers} and ${sum.toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money, you need ${sum.toFixed(2)} leva more.`);
    }

}
solve(["Roses",
    "55",
    "250"])


/*

function solve(input) {

    let typeFlowers = input[0];
    let countFlowers = Number(input[1]);
    let budget = Number(input[2]);
    let price = 0;

    if (typeFlowers == 'Roses') {
        price = countFlowers * 5;
        if (countFlowers > 80) {
            price *= 0.90;
        }
    } else if (typeFlowers == 'Dahlias') {
        price = countFlowers * 3.80;
        if (countFlowers > 90) {
            price *= 0.85;
        }
    } else if (typeFlowers == 'Tulips') {
        price = countFlowers * 2.80;
        if (countFlowers > 80) {
            price *= 0.85;
        }
    } else if (typeFlowers == 'Narcissus') {
        price = countFlowers * 3;
        if (countFlowers < 120) {
            price *= 1.15;
        }
    } else if (typeFlowers == 'Gladiolus') {
        price = countFlowers * 2.50;
        if (countFlowers < 80) {
            price *= 1.20;
        }
    }

    let diff = Math.abs(price - budget);

    if (price <= budget) {
        console.log(`Hey, you have a great garden with ${countFlowers} ${typeFlowers} and ${diff.toFixed(2)} leva left.`)
    } else {
        console.log(`Not enough money, you need ${diff.toFixed(2)} leva more.`)
    }

}
solve(["Roses", "55", "250"]);

*/





