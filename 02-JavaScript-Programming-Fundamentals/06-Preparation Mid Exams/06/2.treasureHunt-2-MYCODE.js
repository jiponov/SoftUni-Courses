function treasureHunt(inputArr) {               // 100/100 

    let initialTreasureChest = inputArr.shift().split('|');

    let index = 0;
    let commands = inputArr[index++];

    while (commands != 'Yohoho!') {
        let currentArr = commands.split(' ');

        if (currentArr[0] == 'Loot') {
            let cutOutLoot = currentArr.shift();
            for (let i = 0; i < currentArr.length; i++) {
                let elementOfCurrentArr = currentArr[i];
                if (initialTreasureChest.includes(elementOfCurrentArr)) {
                } else {
                    initialTreasureChest.unshift(elementOfCurrentArr);
                }
            }

        } else if (currentArr[0] == 'Drop') {
            let removeLootAtPosition = Number(currentArr[1]);
            if ((removeLootAtPosition > initialTreasureChest.length - 1) || (removeLootAtPosition < 0)) {
                commands = inputArr[index++];
                continue;
            } else {
                let getItem = initialTreasureChest.splice(removeLootAtPosition, 1);
                //initialTreasureChest.splice(initialTreasureChest.length, 0, getItem[0]);
                initialTreasureChest.push(getItem[0]);
            }

        } else if (currentArr[0] == 'Steal') {
            let stealCount = Number(currentArr[1]);
            let stolen = initialTreasureChest.splice(-stealCount);
            console.log(stolen.join(', '))
        }
        commands = inputArr[index++];
    }


    if (initialTreasureChest.length > 0) {
        let sum = 0;
        let resultArrTransform = initialTreasureChest.map(el => el.length);
        let countResultArr = resultArrTransform.length;
        for (let el of resultArrTransform) {
            sum += Number(el);
        }
        console.log(`Average treasure gain: ${(sum / countResultArr).toFixed(2)} pirate credits. `);

    } else {
        console.log(`Failed treasure hunt.`);
    }
}

treasureHunt([
    "Gold|Silver|Bronze|Medallion|Cup",
    "Loot Wood Gold Coins",
    "Loot Silver Pistol",
    "Drop 3",
    "Steal 3",
    "Yohoho!"]);
console.log('---');
treasureHunt([
    "Diamonds|Silver|Shotgun|Gold",
    "Loot Silver Medals Coal",
    "Drop -1",
    "Drop 1",
    "Steal 6",
    "Yohoho!"]);