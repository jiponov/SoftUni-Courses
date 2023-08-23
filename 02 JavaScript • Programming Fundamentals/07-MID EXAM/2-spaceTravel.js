function spaceTravel(inputArr) {      // 100/100

    let travelArr = inputArr.shift().split('||');
    let stFuel = inputArr.shift();
    let stAmmo = inputArr.shift();
    let startingFuelAsNumber = Number(stFuel);
    let startingAmmunitionAsNumber = Number(stAmmo);

    let index = 0;
    let commands = travelArr[index++];
    while (commands !== 'Titan') {
        let current = commands.split(' ');
        let operation = current.shift();
        let num = Number(current.shift());

        if (operation == 'Travel') {
            if (startingFuelAsNumber >= num) {
                startingFuelAsNumber -= num * 1;
                console.log(`The spaceship travelled ${num} light-years.`)
            } else {
                console.log(`Mission failed.`);
                return;
            }

        } else if (operation == 'Enemy') {
            let isNotPossible = true;
            if (startingAmmunitionAsNumber >= num) {
                isNotPossible = false;
                startingAmmunitionAsNumber -= num;
                console.log(`An enemy with ${num} armour is defeated.`);

            } else if (startingAmmunitionAsNumber < num) {
                startingFuelAsNumber -= num * 2;
                if (startingFuelAsNumber > 0) {
                    isNotPossible = false;
                    console.log(`An enemy with ${num} armour is outmaneuvered.`);
                }
            }

            if (isNotPossible) {
                console.log(`Mission failed.`);
                return;
            }

        } else if (operation == 'Repair') {
            startingFuelAsNumber += num;
            let ammoAdded = 2 * num;
            startingAmmunitionAsNumber += ammoAdded;
            console.log(`Ammunitions added: ${ammoAdded}.`);
            console.log(`Fuel added: ${num}.`);
        }

        commands = travelArr[index++];
    }

    console.log(`You have reached Titan, all passengers are safe.`);
}

spaceTravel((['Travel 10||Enemy 30||Repair 15||Titan', '50', '80']));
console.log('---')
spaceTravel((['Travel 20||Enemy 50||Enemy 50||Enemy 10||Repair 15||Enemy 50||Titan', '60', '100']));
