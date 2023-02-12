function muOnline(input) {          // 100/100

    let health = 100;
    let bitcoins = 0;

    let dungeon = input.split('|');
    let rooms = 0;

    while (dungeon[0] != undefined) {
        let command = dungeon.shift().split(' ');
        let operation = command[0];
        let num = Number(command[1]);

        if (operation == 'potion') {
            let maxHealth = health + num;
            let diff = 0;

            if (maxHealth > 100) {
                diff = 100 - health;
                health = 100;
            } else {
                diff = num;
                health = maxHealth;
            }

            console.log(`You healed for ${diff} hp.`);
            console.log(`Current health: ${health} hp.`);
            rooms++;

        } else if (operation == 'chest') {
            bitcoins += num;
            console.log(`You found ${num} bitcoins.`);
            rooms++;

        } else {
            let monster = operation;
            let attackMonster = num;
            health -= attackMonster;
            rooms++;

            if (health > 0) {
                console.log(`You slayed ${monster}.`);
            } else {
                console.log(`You died! Killed by ${monster}.`);
                return console.log(`Best room: ${rooms}`);
            }
        }
    }

    console.log(`You've made it!`);
    console.log(`Bitcoins: ${bitcoins}`);
    console.log(`Health: ${health}`);
}

muOnline("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000");
console.log('-------');
muOnline("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110");
