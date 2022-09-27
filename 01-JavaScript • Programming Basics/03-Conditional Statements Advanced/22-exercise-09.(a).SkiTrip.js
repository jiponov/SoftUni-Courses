function solve(input) {

    let days = Number(input[0]);
    let type = input[1];
    let rating = input[2];

    let nights = days - 1;
    let price = 0;

    switch (type) {
        case 'room for one person': price = nights * 18; break;
        case 'apartment': price = nights * 25; break;
        case 'president apartment': price = nights * 35; break;
    }

    if (nights < 10) {
        if (type === 'apartment') {
            price *= 0.7;
        } else if (type === 'president apartment') {
            price = price * 0.9;
        }

    } else if (nights >= 10 && nights <= 15) {
        if (type === 'apartment') {
            price *= 0.65;
        } else if (type === 'president apartment') {
            price = price * 0.85;
        }

    } else if (nights > 15) {
        if (type === 'apartment') {
            price *= 0.5;
        } else if (type === 'president apartment') {
            price = price * 0.8;
        }
    }

    switch (rating) {
        case 'positive': price = price * 1.25; break;
        case 'negative': price = price * 0.90; break;
    }

    console.log(price.toFixed(2));
}
solve(["14",
    "apartment",
    "positive"]);




