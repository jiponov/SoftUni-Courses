function solve(input) {

    let degree = Number(input[0]);
    let time = input[1];

    let outfit = 0;
    let shoes = 0;

    if (degree >= 10 && degree <= 18) {
        if (time === 'Morning') {
            outfit = 'Sweatshirt';
            shoes = 'Sneakers';
        } else if (time === 'Afternoon' || time === 'Evening') {
            outfit = 'Shirt';
            shoes = 'Moccasins';
        }

    } else if (degree > 18 && degree <= 24) {
        if (time === 'Morning') {
            outfit = 'Shirt';
            shoes = 'Moccasins';
        } else if (time === 'Afternoon') {
            outfit = 'T-Shirt';
            shoes = 'Sandals';
        } else if (time === 'Evening') {
            outfit = 'Shirt';
            shoes = 'Moccasins';
        }

    } else if (degree >= 25) {
        if (time === 'Morning') {
            outfit = 'T-Shirt';
            shoes = 'Sandals';
        } else if (time === 'Afternoon') {
            outfit = 'Swim Suit';
            shoes = 'Barefoot';
        } else if (time === 'Evening') {
            outfit = 'Shirt';
            shoes = 'Moccasins';
        }

    }
    console.log(`It's ${degree} degrees, get your ${outfit} and ${shoes}.`);
}
solve(["16",
    "Morning"]);

/*

function solve(input) {

let degrees = Number(input[0]);
let dayType = input[1];
let outfit;
let shoes;

switch (dayType) {
    case 'Morning':
        if (degrees >= 10 && degrees <= 18) {
            outfit = 'Sweatshirt';
            shoes = 'Sneakers';
        } else if (degrees > 18 && degrees <= 24) {
            outfit = 'Shirt';
            shoes = 'Moccasins';
        } else if (degrees >= 25) {
            outfit = 'T-Shirt';
            shoes = 'Sandals';
        }
        break;
    case 'Afternoon':
        if (degrees >= 10 && degrees <= 18) {
            outfit = 'Shirt';
            shoes = 'Moccasins';
        } else if (degrees > 18 && degrees <= 24) {
            outfit = 'T-Shirt';
            shoes = 'Sandals';
        } else if (degrees >= 25) {
            outfit = 'Swim Suit';
            shoes = 'Barefoot';
        }
        break;
    case 'Evening':
        if (degrees >= 10 && degrees <= 18) {
            outfit = 'Shirt';
            shoes = 'Moccasins';
        } else if (degrees > 18 && degrees <= 24) {
            outfit = 'Shirt';
            shoes = 'Moccasins';
        } else if (degrees >= 25) {
            outfit = 'Shirt';
            shoes = 'Moccasins';
        }
        break;
}

console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`)
}
solve(["16", "Morning"]);

*/




