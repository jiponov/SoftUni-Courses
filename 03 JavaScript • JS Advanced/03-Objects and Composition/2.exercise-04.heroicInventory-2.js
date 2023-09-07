function heroicInventory(arr) {    // 100/100

    const result = [];

    for (const el of arr) {
        let [name, level, items] = el.split(" / ");
        level = Number(level);
        items = items ? items.split(', ') : [];

        if (items.length !== 0) {
            const hero = {
                name: name,
                level: level,
                items: items
            };
            result.push(hero)
        } else {
            const hero = {
                name: name,
                level: level,
                items: [],

            }
            result.push(hero);
        }
    }

    return JSON.stringify(result);
}

console.log(heroicInventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']));
console.log('-------');
console.log(heroicInventory(['Jake / 1000 / Gauss, HolidayGrenade']));