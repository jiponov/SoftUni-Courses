function vacation(input) {

    let index = 0;
    let needMoney = Number(input[index]);
    index++;
    let money = Number(input[index]);
    index++;

    let totalDay = 0;
    let totalSpendDay = 0;

    while (money < needMoney) {
        let command = input[index];
        index++;
        let tempMoney = Number(input[index]);
        index++;
        totalDay++;

        switch (command) {
            case 'save':
                money += tempMoney;
                totalSpendDay = 0;
                break;
            case 'spend':
                totalSpendDay++;
                money -= tempMoney;

                if (money < 0) {
                    money = 0;
                }
        }


        if (totalSpendDay === 5) {
            console.log(`You can't save the money.`);
            console.log(totalDay);
            break;
        }

    }

    if (money >= needMoney) {
        console.log(`You saved the money for ${totalDay} days.`);
    }

}
vacation(["2000",
    "1000",
    "spend",
    "1200",
    "save",
    "2000"]);


