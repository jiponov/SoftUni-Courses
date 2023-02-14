function treasureHunt(input) {          // 100/100

    let treasureChest = input
        .shift()
        .split('|');

    while (input[0] != undefined) {
        let command = input.shift();
        if (command == 'Yohoho!') {
            break;
        }

        command = command.split(' ');
        let operation = command[0];

        if (operation == 'Loot') {
            let [...loots] = command.slice(1);
            for (let el of [...loots]) {
                if (!treasureChest.includes(el)) {
                    treasureChest.unshift(el);
                }
            }

        } else if (operation == 'Drop') {
            let index = command[1];
            let item = treasureChest[index];
            if (treasureChest.includes(item)) {
                treasureChest.splice(index, 1);
                treasureChest.push(item);
            }

        } else if (operation == 'Steal') {
            let count = Number(command[1]);
            let stolen = treasureChest.splice(-count);
            console.log(`${stolen.join(', ')}`);
        }
    }


    let gainLengths = treasureChest
        .map(el => el.length)
        .reduce((a, v) => a + v, 0);

    let treasureLength = treasureChest.length;
    let avg = (gainLengths / treasureLength).toFixed(2);


    if (treasureLength > 0) {
        console.log(`Average treasure gain: ${avg} pirate credits.`);
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