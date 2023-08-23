function solve(input) {

    let budget = Number(input[0]);
    let season = input[1];

    let destination = 0;
    let price = 0;
    let type = 0;

    if (budget <= 100) {
        destination = 'Bulgaria'
        if (season === 'summer') {
            price = budget * 0.3;
            type = 'Camp'
        } else if (season === 'winter') {
            price = budget * 0.7;
            type = 'Hotel'
        }
    }

    if (budget > 100 && budget <= 1000) {
        destination = 'Balkans'
        if (season === 'summer') {
            price = budget * 0.4;
            type = 'Camp'
        } else if (season === 'winter') {
            price = budget * 0.8;
            type = 'Hotel'
        }
    }

    if (budget > 1000) {
        destination = 'Europe'
        if (season === 'summer' || season === 'winter') {
            price = budget * 0.9;
            type = 'Hotel'
        }
    }

    console.log(`Somewhere in ${destination}`);
    console.log(`${type} - ${price.toFixed(2)}`);

}
solve(["50", "summer"]);



