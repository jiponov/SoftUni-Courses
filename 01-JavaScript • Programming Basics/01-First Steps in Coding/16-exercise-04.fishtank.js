function fishtank(input) {
    let length = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);
    let occupiedPercent = Number(input[3]);
    let volumeCentimeters = length * width * height;
    let volumeLiters = volumeCentimeters / 1000;
    let occupiedSpace = occupiedPercent / 100;
    let neededLiters = volumeLiters * (1 - occupiedSpace);
    console.log(neededLiters);
}

fishtank(["85",
    "75",
    "47",
    "17"]);