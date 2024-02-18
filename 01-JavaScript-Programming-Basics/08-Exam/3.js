function solve(input) {

    let country = input[0];
    let typeSouvenir = input[1];
    let countSouvenir = Number(input[2]);

    let money = 0;
    let isWrongMain = false;
    let isWrongInside = false;

    if (country == 'Argentina') {
        if (typeSouvenir == 'flags') {
            money += countSouvenir * 3.25;
        } else if (typeSouvenir == 'caps') {
            money += countSouvenir * 7.2;
        } else if (typeSouvenir == 'posters') {
            money += countSouvenir * 5.1;
        } else if (typeSouvenir == 'stickers') {
            money += countSouvenir * 1.25;
        } else {
            isWrongInside = true;
        }
    } else if (country == 'Brazil') {
        if (typeSouvenir == 'flags') {
            money += countSouvenir * 4.2;
        } else if (typeSouvenir == 'caps') {
            money += countSouvenir * 8.5;
        } else if (typeSouvenir == 'posters') {
            money += countSouvenir * 5.35;
        } else if (typeSouvenir == 'stickers') {
            money += countSouvenir * 1.2;
        } else {
            isWrongInside = true;
        }
    } else if (country == 'Croatia') {
        if (typeSouvenir == 'flags') {
            money += countSouvenir * 2.75;
        } else if (typeSouvenir == 'caps') {
            money += countSouvenir * 6.9;
        } else if (typeSouvenir == 'posters') {
            money += countSouvenir * 4.95;
        } else if (typeSouvenir == 'stickers') {
            money += countSouvenir * 1.1;
        } else {
            isWrongInside = true;
        }
    } else if (country == 'Denmark') {
        if (typeSouvenir == 'flags') {
            money += countSouvenir * 3.1;
        } else if (typeSouvenir == 'caps') {
            money += countSouvenir * 6.5;
        } else if (typeSouvenir == 'posters') {
            money += countSouvenir * 4.8;
        } else if (typeSouvenir == 'stickers') {
            money += countSouvenir * 0.9;
        } else {
            isWrongInside = true;
        }
    } else {
        isWrongMain = true;
    }


    if (isWrongMain) {
        console.log(`Invalid country!`);
    } else if (isWrongInside) {
        console.log(`Invalid stock!`)
    } else if (!isWrongInside && !isWrongMain) {
        console.log(`Pepi bought ${countSouvenir} ${typeSouvenir} of ${country} for ${money.toFixed(2)} lv.`);
    }
}

solve(["Brazil",
    "stickers",
    "5"]);

solve(["Denmark",
    "caps",
    "8"]);

solve(["USA",
    "caps",
    "18"]);

solve(["Argentina",
    "shirts",
    "35"]);

solve(["Croatia",
    "flags",
    "13"]);