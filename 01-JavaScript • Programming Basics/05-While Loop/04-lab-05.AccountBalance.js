function solve(input) {

    let index = 0;
    let payment = input[index];
    let money = 0;

    while (payment != 'NoMoreMoney') {
        let paymentAsNumber = Number(payment);
        if (paymentAsNumber < 0) {
            console.log(`Invalid operation!`);
            break;
        }
        money += paymentAsNumber;
        console.log(`Increase: ${paymentAsNumber.toFixed(2)}`);
        index++;
        payment = input[index];
    }
    console.log(`Total: ${money.toFixed(2)}`);
}
solve(["5.51",
    "69.42",
    "100",
    "NoMoreMoney"]);

