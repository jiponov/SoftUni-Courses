function foodDelivery(input) {
    let chickenMenu = Number(input[0]);
    let fishMenu = Number(input[1]);
    let vegetarianMenu = Number(input[2]);
    let priceChicken = chickenMenu * 10.35;
    let priceFish = fishMenu * 12.40;
    let priceVegetarian = vegetarianMenu * 8.15;
    let totalPriceMenus = priceChicken + priceFish + priceVegetarian;
    let priceDessert = 0.2 * totalPriceMenus;
    let priceDelivery = 2.50;
    let totalSumDelivery = totalPriceMenus + priceDessert + priceDelivery;
    console.log(totalSumDelivery);

}

foodDelivery(["2",
    "4",
    "3"]);