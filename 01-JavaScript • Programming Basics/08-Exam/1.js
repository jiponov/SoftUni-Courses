function solve(input) {

    let pricePerPage = Number(input[0]);
    let pricePerCover = Number(input[1]);
    let discountInPercent = Number(input[2]);
    let priceForDesigner = Number(input[3]);
    let paidMoneyForTeam = Number(input[4]);

    let allPages = pricePerPage * 899;
    let allCovers = 2 * pricePerCover;
    let book = allCovers + allPages;
    let totalBook = book * (1 - (discountInPercent / 100));

    let expenses = totalBook + priceForDesigner;
    let moneyTotal = expenses * (1 - (paidMoneyForTeam / 100));

    console.log(`Avtonom should pay ${moneyTotal.toFixed(2)} BGN.`);
}

solve(["0.01",
    "1",
    "10",
    "20",
    "20"]);

solve(["0.05",
    "1.20",
    "40",
    "19.99",
    "20"]);

solve(["0.02",
    "0.50",
    "18",
    "21",
    "50"]);