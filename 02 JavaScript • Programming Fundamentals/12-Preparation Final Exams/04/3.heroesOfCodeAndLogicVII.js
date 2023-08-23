function heroesOfCodeAndLogicVII(input) {          // 100/100

    let n = Number(input.shift());
    let heroes = input.splice(0, n);
    let catalog = {};
    for (line of heroes) {
        let [hero, hp, mp] = line.split(' ')
        hp = Number(hp);
        mp = Number(mp);

        if (!catalog.hasOwnProperty(hero)) {
            catalog[hero] = {
                hp,
                mp,
            }
        }
    }
    //console.log(catalog)
    let maxHP = 100;
    let maxMP = 200;

    while (input[0] != undefined) {
        let command = input.shift();
        if (command == 'End') {
            break;
        }

        command = command.split(' - ');
        let operation = command.shift();

        if (operation == 'CastSpell') {
            let heroName = command.shift();
            let mpNeeded = Number(command.shift());
            let spellName = command.shift();
            if (catalog[heroName].mp >= mpNeeded) {
                catalog[heroName].mp -= mpNeeded;
                console.log(`${heroName} has successfully cast ${spellName} and now has ${catalog[heroName].mp} MP!`);
            } else {
                console.log(`${heroName} does not have enough MP to cast ${spellName}!`);
            }


        } else if (operation == 'TakeDamage') {
            let heroName = command.shift();
            let damage = Number(command.shift());
            let attacker = command.shift();
            catalog[heroName].hp -= damage;
            if (catalog[heroName].hp > 0) {
                console.log(`${heroName} was hit for ${damage} HP by ${attacker} and now has ${catalog[heroName].hp} HP left!`);
            } else {
                delete catalog[heroName];
                console.log(`${heroName} has been killed by ${attacker}!`);
            }

        } else if (operation == 'Recharge') {
            let heroName = command.shift();
            let recharge = Number(command.shift());
            let currentMP = catalog[heroName].mp;
            catalog[heroName].mp += recharge;
            if (catalog[heroName].mp > maxMP) {
                catalog[heroName].mp = maxMP;
                let amountRecovered = maxMP - currentMP;
                console.log(`${heroName} recharged for ${amountRecovered} MP!`);
            } else {
                console.log(`${heroName} recharged for ${recharge} MP!`);
            }

        } else if (operation == 'Heal') {
            let heroName = command.shift();
            let heal = Number(command.shift());
            let currentHP = catalog[heroName].hp;
            catalog[heroName].hp += heal;
            if (catalog[heroName].hp > maxHP) {
                catalog[heroName].hp = maxHP;
                let amountRecovered = maxHP - currentHP;
                console.log(`${heroName} healed for ${amountRecovered} HP!`);
            } else {
                console.log(`${heroName} healed for ${heal} HP!`);
            }
        }
    }

    if (Object.keys(catalog).length > 0) {
        for (let el in catalog) {
            console.log(`${el}
  HP: ${catalog[el].hp}
  MP: ${catalog[el].mp}`);
        }
    }
}

heroesOfCodeAndLogicVII([
    '2',
    'Solmyr 85 120',
    'Kyrre 99 50',
    'Heal - Solmyr - 10',
    'Recharge - Solmyr - 50',
    'TakeDamage - Kyrre - 66 - Orc',
    'CastSpell - Kyrre - 15 - ViewEarth',
    'End'
]);

console.log('-------');

heroesOfCodeAndLogicVII([
    '4',
    'Adela 90 150',
    'SirMullich 70 40',
    'Ivor 1 111',
    'Tyris 94 61',
    'Heal - SirMullich - 50',
    'Recharge - Adela - 100',
    'CastSpell - Tyris - 1000 - Fireball',
    'TakeDamage - Tyris - 99 - Fireball',
    'TakeDamage - Ivor - 3 - Mosquito',
    'End'
]);

