function solve(input) {

    let age = Number(input[0]);
    let machinePrice = Number(input[1]);
    let toyPrice = Number(input[2]);

    let money = 0;
    let currentMoney = 10;
    let toys = 0;
    let stolenMoney = 0;

    for (let b = 1; b <= age; b++) {
        if (b % 2 === 0) {
            money = money + currentMoney;            //  money += currentMoney
            currentMoney = currentMoney + 10;        //  currentMoney += 10;
            stolenMoney = stolenMoney + 1;           //  stolenMoney += 1;
        } else {
            toys = toys + 1;                         //  или може аналог код: toys++;   ИЛИ   toys += 1;
        }
    }

    let toysPrice = toys * toyPrice;
    let totalMoney = (money + toysPrice) - stolenMoney;

    diff = Math.abs(totalMoney - machinePrice)

    if (totalMoney >= machinePrice) {
        console.log(`Yes! ${diff.toFixed(2)}`)
    } else {
        console.log(`No! ${diff.toFixed(2)}`)
    }
}
solve(["10", "170.00", "6"]);

/*

function solve(input) {

    let age = Number(input[0]);
    let laundryPrice = Number(input[1]);
    let toyPrice = Number(input[2]);

    let money = 0;
    let addedMoney = 10;
    let stolenMoney = 0;
    let toys = 0;

    for (let i = 1; i <= age; i++) {
        if (i % 2 == 0) {
            money += addedMoney;
            addedMoney += 10;
            stolenMoney += 1;
        } else if (i % 2 != 0) {
            toys++;
        }
    }

    let toysPriceTotal = toyPrice * toys;
    let totalMoney = (money + toysPriceTotal) - stolenMoney;

    let diff = Math.abs(totalMoney - laundryPrice);

    if (totalMoney >= laundryPrice) {
        console.log(`Yes! ${diff.toFixed(2)}`);
    } else {
        console.log(`No! ${diff.toFixed(2)}`);
    }
}
solve(["10", "170.00", "6"]);

*/




















