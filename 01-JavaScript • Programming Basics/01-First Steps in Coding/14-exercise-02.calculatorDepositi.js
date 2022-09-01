function sum(input) {
    let deposit = Number(input[0]);
    let months = Number(input[1]);
    let annualDividendRate = Number(input[2]);
    let rate = deposit * (annualDividendRate / 100);
    let oneMonthDividendRate = rate / 12;
    let sum = deposit + (months * oneMonthDividendRate);
    console.log(sum);
}
sum(["200",
    "3",
    "5.7"]);