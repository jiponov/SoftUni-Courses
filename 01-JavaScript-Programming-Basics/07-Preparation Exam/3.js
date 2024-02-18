function solve(input) {

    let dancers = Number(input[0]);
    let pointsJury = Number(input[1]);
    let season = input[2];
    let place = input[3];

    let price = 0;

    if (place == 'Bulgaria') {
        if (season == 'summer') {
            price += pointsJury * dancers;
            price *= 0.95;
        } else if (season == 'winter') {
            price += pointsJury * dancers;
            price *= 0.92;
        }
    } else if (place == 'Abroad') {
        if (season == 'summer') {
            price += (pointsJury * dancers) + 0.5 * (pointsJury * dancers);
            price *= 0.90;
        } else if (season == 'winter') {
            price += (pointsJury * dancers) + 0.5 * (pointsJury * dancers);
            price *= 0.85;
        }
    }

    let sumCharity = 0.75 * price;
    let sumPerDancer = (0.25 * price) / dancers;

    console.log(`Charity - ${sumCharity.toFixed(2)}`);
    console.log(`Money per dancer - ${sumPerDancer.toFixed(2)}`);
}

solve(["1",
    "89.5",
    "summer",
    "Abroad"]);

solve(["25",
    "98",
    "winter",
    "Bulgaria"]);