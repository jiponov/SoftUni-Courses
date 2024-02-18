function manOWar(input) {          // 70/100

    let pirateship = input.shift().split('>').map(Number);
    let warship = input.shift().split('>').map(Number);
    let maxHealthSection = Number(input.shift());

    while (input.length > 0) {
        let command = input.shift();
        if (command == 'Retire') {
            break;
        }

        command = command.split(' ');
        let operation = command.shift();

        if (operation == 'Fire') {
            let index = Number(command[0]);
            let damage = Number(command[1]);
            let sectionWarship = warship[index];
            if (index >= 0 && index <= warship.length - 1) {
                let diff = sectionWarship - damage;
                if (diff <= 0) {
                    return console.log(`You won! The enemy ship has sunken.`);
                } else {
                    warship.splice(index, 1, diff);
                }
            }

        } else if (operation == 'Defend') {
            let startIndex = Number(command[0]);
            let endIndex = Number(command[1]);
            let damage = Number(command[2]);
            let dmgLength = (endIndex - startIndex) + 1;
            if ((startIndex >= 0 && startIndex <= pirateship.length - 1) && (endIndex >= 0 && endIndex <= pirateship.length - 1)) {
                let sectionsPirateship = pirateship.slice(startIndex, dmgLength);
                sectionsPirateship = sectionsPirateship.map(el => el - damage);
                if (sectionsPirateship.some(el => el <= 0)) {
                    return console.log(`You lost! The pirate ship has sunken.`);
                } else if (sectionsPirateship.every(el => el > 0)) {
                    pirateship.splice(startIndex, dmgLength, ...sectionsPirateship);
                }
            }

        } else if (operation == 'Repair') {
            let index = Number(command[0]);
            let health = Number(command[1]);
            let sectionPirateship = pirateship[index];
            let repair = sectionPirateship + health;
            if (index >= 0 && index <= pirateship.length - 1) {
                if (repair >= maxHealthSection) {
                    pirateship.splice(index, 1, maxHealthSection);
                } else {
                    pirateship.splice(index, 1, repair);
                }
            }

        } else if (operation == 'Status') {
            let criticalValue = maxHealthSection * 0.2;
            let status = pirateship.filter(el => el < criticalValue);
            let statusLength = status.length;
            console.log(`${statusLength} sections need repair.`);
        }
    }


    if ((pirateship.every(el => el > 0)) && (warship.every(el => el > 0))) {
        let pirateshipSum = pirateship.reduce((a, v) => a + v, 0);
        let warshipSum = warship.reduce((a, v) => a + v, 0);

        console.log(`Pirate ship status: ${pirateshipSum}`);
        console.log(`Warship status: ${warshipSum}`);
    }
}

manOWar([
    "12>13>11>20>66",
    "12>22>33>44>55>32>18",
    "70",
    "Fire 2 11",
    "Fire 8 100",
    "Defend 3 6 11",
    "Defend 0 3 5",
    "Repair 1 33",
    "Status",
    "Retire"]);
console.log('-------');
manOWar([
    "2>3>4>5>2",
    "6>7>8>9>10>11",
    "20",
    "Status",
    "Fire 2 3",
    "Defend 0 4 11",
    "Repair 3 18",
    "Retire"]);

    //&& (endIndex >= startIndex)

