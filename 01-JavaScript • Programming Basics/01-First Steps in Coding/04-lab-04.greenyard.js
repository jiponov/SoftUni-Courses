function greenyard(input) {
    let oneSquareMeter = 7.61;
    let squareMeterAll = Number(input[0]);
    let squarePrice = squareMeterAll * oneSquareMeter;
    let discount = squarePrice * 0.18;
    let finalPrice = squarePrice - discount;
    let result1 = (`The final price is: ${finalPrice} lv.`);
    let result2 = (`The discount is: ${discount} lv.`);
    console.log(result1);
    console.log(result2);
}
greenyard(["550"]);