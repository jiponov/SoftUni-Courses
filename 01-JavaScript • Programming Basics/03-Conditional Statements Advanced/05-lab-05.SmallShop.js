function solve(input) {
    let product = input[0];
    let town = input[1];
    let quantity = Number(input[2]);

    let price = 0;

    if (town === "Sofia") {
        switch (product) {
            case "coffee": price = 0.5 * quantity; break;
            case "water": price = 0.8 * quantity; break;
            case "beer": price = 1.2 * quantity; break;
            case "sweets": price = 1.45 * quantity; break;
            case 'peanuts': price = 1.60 * quantity; break;
        }

    } else if (town === "Plovdiv") {
        switch (product) {
            case "coffee": price = 0.4 * quantity; break;
            case 'water': price = 0.7 * quantity; break;
            case 'beer': price = 1.15 * quantity; break;
            case 'sweets': price = 1.3 * quantity; break;
            case 'peanuts': price = 1.5 * quantity; break;
        }

    } else if (town === "Varna") {
        switch (product) {
            case "coffee": price = 0.45 * quantity; break;
            case 'water': price = 0.7 * quantity; break;
            case 'beer': price = 1.1 * quantity; break;
            case 'sweets': price = 1.35 * quantity; break;
            case 'peanuts': price = 1.55 * quantity; break;
        }
    }
    console.log(price);

}
solve(["coffee",
    "Varna",
    "2"]);





