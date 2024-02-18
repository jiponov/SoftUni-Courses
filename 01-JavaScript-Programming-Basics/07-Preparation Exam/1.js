function solve(input) {

    let maznini = Number(input[0]);
    let proteini = Number(input[1]);
    let vuglehidrati = Number(input[2]);
    let totalKalorii = Number(input[3]);
    let vodaProcent = Number(input[4]);

    let totalMaznini = ((maznini / 100) * totalKalorii) / 9;
    let totalProteini = ((proteini / 100) * totalKalorii) / 4;
    let totalVuglehidrati = ((vuglehidrati / 100) * totalKalorii) / 4;

    let tegloHrana = totalMaznini + totalProteini + totalVuglehidrati;
    let calories = totalKalorii / tegloHrana;
    let water = 1 - (vodaProcent / 100);
    let finalOneGram = water * calories;

    console.log(`${finalOneGram.toFixed(4)}`);
}

solve(["60",
    "25",
    "15",
    "2500",
    "60"]);

solve(["40",
    "40",
    "20",
    "3000",
    "40"]);

solve(["20",
    "60",
    "20",
    "1800",
    "50"]);