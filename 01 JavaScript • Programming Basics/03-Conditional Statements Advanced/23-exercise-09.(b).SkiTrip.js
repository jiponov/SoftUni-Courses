function solve(input) {

    let days = Number(input[0]);
    let type = input[1];
    let mark = input[2];

    let nights = days - 1;

    let price = 0;


    if (type == 'room for one person') {
        price = nights * 18;
        if (days < 10) {

        } else if (days >= 10 && days <= 15) {

        } else if (days > 15) {

        }

    } else if (type == 'apartment') {
        price = nights * 25;
        if (days < 10) {
            price *= 0.70;
        } else if (days >= 10 && days <= 15) {
            price *= 0.65;
        } else if (days > 15) {
            price *= 0.50;
        }

    } else if (type == 'president apartment') {
        price = nights * 35;
        if (days < 10) {
            price *= 0.90;
        } else if (days >= 10 && days <= 15) {
            price *= 0.85;
        } else if (days > 15) {
            price *= 0.80;
        }
    }

    if (mark == 'positive') {
        price *= 1.25;
    } else if (mark == 'negative') {
        price *= 0.90;
    }

    console.log(price.toFixed(2));

}
solve(["14", "apartment", "positive"]);



















