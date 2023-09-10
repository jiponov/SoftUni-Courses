function heroes() {    // 100/100

    const spellCast = hero => ({
        cast: spell => {
            console.log(`${hero.name} cast ${spell}`);
            hero.mana--;
        }
    });

    const fights = hero => ({
        fight: () => {
            console.log(`${hero.name} slashes at the foe!`);
            hero.stamina--;
        }
    });

    const mage = name => {
        let hero = {
            name,
            health: 100,
            mana: 100,
        }
        return Object.assign(hero, spellCast(hero));
    };

    const fighter = name => {
        let hero = {
            name,
            health: 100,
            stamina: 100
        }
        return Object.assign(hero, fights(hero));
    };
    return {
        mage: mage,
        fighter: fighter
    }
}


let create = heroes();
const scorcher = create.mage("Scorcher");
scorcher.cast("fireball")
scorcher.cast("thunder")
scorcher.cast("light")

const scorcher2 = create.fighter("Scorcher 2");
scorcher2.fight()

console.log(scorcher2.stamina);
console.log(scorcher.mana);