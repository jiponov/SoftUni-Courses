function solve(input) {

    let index = 0;
    let target = Number(input[index]);
    index++;
    let command = input[index];
    index++;

    let money = 0;
    let isAccomplished = false;

    while (command != 'closed') {
        let type = command;
        let temp = input[index];
        index++;

        if (type == 'haircut') {
            if (temp == 'mens') {
                money += 15;
            } else if (temp == 'ladies') {
                money += 20;
            } else if (temp == 'kids') {
                money += 10;
            }
        } else if (type == 'color') {
            if (temp == 'touch up') {
                money += 20;
            } else if (temp == 'full color') {
                money += 30;
            }
        }
        if (money >= target) {
            isAccomplished = true;
            break;
        }

        command = input[index];
        index++;
    }

    let diff = Math.abs(money - target);
    if (isAccomplished) {
        console.log(`You have reached your target for the day!`)
    } else if (!isAccomplished) {
        console.log(`Target not reached! You need ${diff} lv.more.`)
    }

    console.log(`Earned money: ${money}lv.`)
}

solve(["300",
    "haircut",
    "ladies",
    "haircut",
    "kids",
    "color",
    "touch up",
    "closed"]);

solve(["50",
    "color",
    "full color",
    "haircut",
    "ladies"]);