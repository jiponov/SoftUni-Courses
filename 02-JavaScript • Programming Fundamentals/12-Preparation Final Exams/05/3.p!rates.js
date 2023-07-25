function pirates(input) {          // 100/100

    let settlements = {};

    while (input[0] != undefined) {
        let line = input.shift();
        if (line == 'Sail') {
            break;
        }

        line = line.split('||');
        let city = line[0];
        let population = Number(line[1]);
        let gold = Number(line[2]);

        if (!settlements[city]) {
            settlements[city] = {
                population,
                gold,
            }
        } else {
            settlements[city].population += population;
            settlements[city]['gold'] += gold;
        }
    }


    for (let line of input) {
        let [command, ...rest] = line.split('=>');
        if (command == 'End') {
            break;
        }


        if (command == 'Plunder') {
            let town = rest[0];
            let people = Number(rest[1]);
            let gold = Number(rest[2]);

            settlements[town].population -= people;
            settlements[town].gold -= gold;
            console.log(`${town} plundered! ${gold} gold stolen, ${people} citizens killed.`);
            if ((settlements[town].population <= 0) || (settlements[town].gold <= 0)) {
                delete settlements[town];
                console.log(`${town} has been wiped off the map!`);
            }

        } else if (command == 'Prosper') {
            let town = rest[0];
            let gold = Number(rest[1]);

            if (gold < 0) {
                console.log(`Gold added cannot be a negative number!`);
                continue;
            }
            settlements[town].gold += gold;
            console.log(`${gold} gold added to the city treasury. ${town} now has ${settlements[town].gold} gold.`);
        }
    }

    let keys = Object.keys(settlements);
    let keysL = Object.keys(settlements).length;
    if (keys.length > 0) {
        console.log(`Ahoy, Captain! There are ${keysL} wealthy settlements to go to:`);
        for (let i = 0; i < keysL; i++) {
            let current = keys[i];
            console.log(`${current} -> Population: ${settlements[current].population} citizens, Gold: ${settlements[current].gold} kg`);
        }
    } else {
        console.log(`Ahoy, Captain! All targets have been plundered and destroyed!`);
    }
}

pirates([
    "Tortuga||345000||1250",
    "Santo Domingo||240000||630",
    "Havana||410000||1100",
    "Sail",
    "Plunder=>Tortuga=>75000=>380",
    "Prosper=>Santo Domingo=>180",
    "End"
]);
console.log('-------');
pirates([
    "Nassau||95000||1000",
    "San Juan||930000||1250",
    "Campeche||270000||690",
    "Port Royal||320000||1000",
    "Port Royal||100000||2000",
    "Sail",
    "Prosper=>Port Royal=>-200",
    "Plunder=>Nassau=>94000=>750",
    "Plunder=>Nassau=>1000=>150",
    "Plunder=>Campeche=>150000=>690",
    "End"
]);