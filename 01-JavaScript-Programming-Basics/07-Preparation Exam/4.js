function solve(input) {

    let index = 0;
    let days = Number(input[index]);
    index++;
    let commandQuantity = Number(input[index]);
    index++;
    let commandDegrees = Number(input[index]);
    index++;

    let liters = 0;
    let degrees = 0;

    for (let i = 0; i < days; i++) {
        let tempQ = commandQuantity;
        let tempD = commandDegrees;
        liters += tempQ;
        degrees += tempQ * tempD;

        commandQuantity = Number(input[index++]);
        commandDegrees = Number(input[index++]);
    }

    let finalDeg = (degrees / liters);
    console.log(`Liter: ${liters.toFixed(2)}`);
    console.log(`Degrees: ${finalDeg.toFixed(2)}`);

    if (finalDeg < 38) {
        console.log(`Not good, you should baking!`);
    } else if (finalDeg >= 38 && finalDeg <= 42) {
        console.log(`Super!`);
    } else if (finalDeg > 42) {
        console.log(`Dilution with distilled water!`);
    }
}

solve(["3",
    "100",
    "45",
    "50",
    "55",
    "150",
    "36"]);

solve(["2",
    "200",
    "43",
    "200",
    "40"]);