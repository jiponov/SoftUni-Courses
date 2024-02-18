function basketball(input) {
    let annualTax = Number(input[0]);
    let sneakers = annualTax - (annualTax * 0.4);
    let equipment = sneakers - (sneakers * 0.2);
    let ball = (equipment * (1 / 4));
    let accessories = (ball * (1 / 5));
    let totalSum = annualTax + sneakers + equipment + ball + accessories;
    console.log(totalSum);

}
basketball(["365"]);