function solve(input) {

    let index = 0;
    let eggs = Number(input[index]);
    index++
    let command = input[index];
    index++;

    let redCount = 0;
    let orangeCount = 0;
    let blueCount = 0;
    let greenCount = 0;

    for (let i = 0; i < eggs; i++) {
        let color = command;

        if (color == 'red') {
            redCount++;

        } else if (color == 'orange') {
            orangeCount++;

        } else if (color == 'blue') {
            blueCount++;

        } else if (color == 'green') {
            greenCount++;

        }
        command = input[index++];
    }

    let maxEggsType = Math.max(redCount, orangeCount, blueCount, greenCount);
    let maxEggColor = "";
    if (maxEggsType == redCount) {
        maxEggColor = 'red'
    } else if (maxEggsType == orangeCount) {
        maxEggColor = 'orange';
    } else if (maxEggsType == blueCount) {
        maxEggColor = 'blue';
    } else if (maxEggsType == greenCount) {
        maxEggColor = 'green';
    }

    console.log(`Red eggs: ${redCount}`);
    console.log(`Orange eggs: ${orangeCount}`);
    console.log(`Blue eggs: ${blueCount}`);
    console.log(`Green eggs: ${greenCount}`);
    console.log(`Max eggs: ${maxEggsType} -> ${maxEggColor}`);
}

solve(['7', 'orange', 'blue', 'green', 'green', 'blue', 'red', 'green',]);
solve(["4", "blue", "red", "blue", "orange"]);