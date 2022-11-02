function solve(input) {

    let moneyOwnPerDayTereza = Number(input[0]);
    let moneyWinPerDay = Number(input[1]);
    let spentMoneyWholePeriodTereza = Number(input[2]);
    let giftPrice = Number(input[3]);

    let pocketMoneyWholePeriod = 5 * moneyOwnPerDayTereza;
    let moneyWinWholePeriod = 5 * moneyWinPerDay;
    let savedMoney = pocketMoneyWholePeriod + moneyWinWholePeriod;

    let totalMoney = savedMoney - spentMoneyWholePeriodTereza;

    if (totalMoney >= giftPrice) {
        console.log(`Profit: ${totalMoney.toFixed(2)} BGN, the gift has been purchased.`);
    } else if (totalMoney < giftPrice) {
        let diff = Math.abs(totalMoney - giftPrice);
        console.log(`Insufficient money: ${diff.toFixed(2)} BGN.`);
    }
}

solve(["5.12",
    "32.05",
    "15",
    "150"]);

solve(["2.10",
    "17.50",
    "20.20",
    "148.50"]);

solve(["15.20",
    "200.00",
    "7.30",
    "1500.12"]);