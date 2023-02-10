function counterStrike(input) {          // 100/100
    let wonBattles = 0;
    let energy = Number(input.shift());

    while (input[0] != undefined) {
        let command = input.shift();

        if (command == 'End of battle') {
            return console.log(`Won battles: ${wonBattles}. Energy left: ${energy}`);
        }

        let enemyShoot = Number(command);


        if (energy >= enemyShoot) {
            wonBattles++;
            energy -= enemyShoot;
            if (wonBattles % 3 == 0) {
                energy += wonBattles;
            }

        } else {
            return console.log(`Not enough energy! Game ends with ${wonBattles} won battles and ${energy} energy`);
        }
    }
}

counterStrike([
    "100",
    "10",
    "10",
    "10",
    "1",
    "2",
    "3",
    "73",
    "10"]);
console.log('-------');
counterStrike([
    "200",
    "54",
    "14",
    "28",
    "13",
    "End of battle"]);

