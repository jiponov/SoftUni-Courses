function solve(input) {

    let index = 0;
    let locations = Number(input[index]);
    index++;

    for (let i = 0; i < locations; i++) {
        let commandExpectedGold = Number(input[index]);
        index++;
        let commandDaysPerLoc = Number(input[index]);
        index++;

        let totalGold = 0;

        for (let j = 0; j < commandDaysPerLoc; j++) {
            let commandGoldPerDay = Number(input[index]);
            index++;
            totalGold += commandGoldPerDay;
        }


        let avg = totalGold / commandDaysPerLoc;
        if (avg >= commandExpectedGold) {
            console.log(`Good job! Average gold per day: ${avg.toFixed(2)}.`)
        } else if (avg < commandExpectedGold) {
            let diff = Math.abs(avg - commandExpectedGold);
            console.log(`You need ${diff.toFixed(2)} gold.`);
        }
    }
}

solve(["2",
    "10",
    "3",
    "10",
    "10",
    "11",
    "20",
    "2",
    "20",
    "10"]);

solve(["1",
    "5",
    "3",
    "10",
    "1",
    "3"]);