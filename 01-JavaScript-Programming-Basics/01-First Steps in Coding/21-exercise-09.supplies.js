function supplies(input) {
    let himikali = Number(input[0]);
    let markeri = Number(input[1]);
    let preparatLiters = Number(input[2]);
    let discount = Number(input[3]);
    let priceHimikali = himikali * 5.80;
    let priceMarkeri = markeri * 7.20;
    let pricePreparat = preparatLiters * 1.20;
    let sumAll = priceHimikali + priceMarkeri + pricePreparat;
    let sumWithDiscount = sumAll - (sumAll * (discount / 100));
    console.log(sumWithDiscount);
}

supplies(["2",
    "3",
    "4",
    "25"]);