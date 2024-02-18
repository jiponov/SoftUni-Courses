function solve(input) {

    let month = input[0];
    let days = Number(input[1]);

    let apartmentPriceTotal = 0;
    let studioPriceTotal = 0;

    if (month === 'May' || month === 'October') {
        apartmentPriceTotal = days * 65;
        studioPriceTotal = days * 50;
        if (days > 7 && days <= 14) {
            studioPriceTotal = studioPriceTotal * 0.95;
        }
        if (days > 14) {
            studioPriceTotal = studioPriceTotal * 0.7;
        }
    }

    if (month === 'June' || month === 'September') {
        apartmentPriceTotal = days * 68.70;
        studioPriceTotal = days * 75.20;
        if (days > 14) {
            studioPriceTotal *= 0.8;
        }
    }

    if (month === 'July' || month === 'August') {
        apartmentPriceTotal = days * 77;
        studioPriceTotal = days * 76;
    }


    if (days > 14) {
        apartmentPriceTotal = apartmentPriceTotal * 0.90;
    }


    console.log(`Apartment: ${apartmentPriceTotal.toFixed(2)} lv.`);
    console.log(`Studio: ${studioPriceTotal.toFixed(2)} lv.`);
}
solve(["August",
    "20"])


/*

function solve(input) {

    let month = input[0];
    let nights = Number(input[1]);
    let sumStudio;
    let sumApartment;

    if (month == 'May' || month == 'October') {
        sumStudio = 50 * nights;
        sumApartment = 65 * nights;
        if (nights > 7 && nights <= 14) {
            sumStudio *= 0.95;
        } else if (nights > 14) {
            sumStudio *= 0.70;
        }
        if (nights > 14) {
            sumApartment *= 0.90;
        }
    } else if (month == 'June' || month == 'September') {
        sumStudio = 75.20 * nights;
        sumApartment = 68.70 * nights;
        if (nights > 14) {
            sumStudio *= 0.80;
        }
        if (nights > 14) {
            sumApartment *= 0.90;
        }
    } else if (month == 'July' || month == 'August') {
        sumStudio = 76 * nights;
        sumApartment = 77 * nights;
        if (nights > 14) {
            sumApartment *= 0.90;
        }
    }

    console.log(`Apartment: ${sumApartment.toFixed(2)} lv.`);
    console.log(`Studio: ${sumStudio.toFixed(2)} lv.`);

}
solve(["May", "15"]);

*/













