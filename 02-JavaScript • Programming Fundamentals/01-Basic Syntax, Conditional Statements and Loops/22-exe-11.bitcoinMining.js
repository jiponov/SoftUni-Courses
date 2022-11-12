function bitcoinMining(input) {

    let totalBitcoins = 0;
    let daysPast = 0;
    let inputL = input.length;
    let days = inputL;
    let oneGramGold = 67.51;
    let oneBitcoin = 11949.16;
    let isDayBitcoin = false;
    let dayBitCount = 0;

    let index = 0;
    let gold = Number(input[index]);
    index++;

    let money = 0;

    for (let i = 1; i <= days; i++) {
        let result = gold * oneGramGold;
        daysPast++;

        if (i % 3 == 0) {
            result *= 0.7;
        }

        money += result;
        let test = Math.floor(money / oneBitcoin);

        if (money >= oneBitcoin) {
            totalBitcoins += test;
            if (totalBitcoins >= 1 && isDayBitcoin == false) {
                dayBitCount += daysPast;
                isDayBitcoin = true;
            }
            money -= oneBitcoin * test;
        }
        gold = Number(input[index++]);
    }

    console.log(`Bought bitcoins: ${totalBitcoins}`);

    if (totalBitcoins >= 1 && isDayBitcoin) {
        console.log(`Day of the first purchased bitcoin: ${dayBitCount}`);
    }

    console.log(`Left money: ${money.toFixed(2)} lv.`);
}
bitcoinMining([100, 200, 300]);

