function heroicInventory(arr) {    // 100/100

    let output = [];

    for (let el of arr) {

        if (el != '') {
            let [name, level, items] = el.split(' / ');
            level = Number(level);

            if (items) {
                items = items.split(', ');
            } else {
                items = [];
                // when there are no items, our property items will be undefined 
                // and trying to spit it will throw an error. Set to an empty array.
            }

            let hero = {
                name,
                level,
                items,
            };

            output.push(hero);
        }
    }

    return JSON.stringify(output);
}

console.log(heroicInventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']));
console.log('-------');
console.log(heroicInventory(['Jake / 1000 / Gauss, HolidayGrenade']));