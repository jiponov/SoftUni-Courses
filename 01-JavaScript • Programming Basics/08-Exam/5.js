function solve(input) {

    let index = 0;
    let command = input[index];
    index++;

    let priceSmall = 0;
    let priceBig = 0;
    let smallCount = 0;
    let bigCount = 0;

    while (command != 'Christmas') {
        let tempAge = command;
        if (tempAge <= 16) {
            smallCount++;
            priceSmall += 5;
        } else if (tempAge > 16) {
            bigCount++;
            priceBig += 15;
        }

        command = input[index++];
    }

    console.log(`Number of adults: ${bigCount}`);
    console.log(`Number of kids: ${smallCount}`);
    console.log(`Money for toys: ${priceSmall}`);
    console.log(`Money for sweaters: ${priceBig}`);
}

solve(["16",
    "20",
    "46",
    "12",
    "8",
    "20",
    "49",
    "Christmas"]);

solve(["16",
    "16",
    "16",
    "16",
    "16",
    "Christmas"]);

solve(["18",
    "20",
    "48",
    "45",
    "56",
    "37",
    "12",
    "14",
    "Christmas"]);