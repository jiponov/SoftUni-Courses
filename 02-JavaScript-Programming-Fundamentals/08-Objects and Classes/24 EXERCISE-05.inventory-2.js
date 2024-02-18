function inventory(inputArr) {

    let heroes = [];    // масив от герои в обекти

    for (let heroInfo of inputArr) {

        let [name, level, items] = heroInfo.split(' / ');

        let currentHero = {
            name: name,
            level: +level,
            items: items
        };

        heroes.push(currentHero);
    }

    let sortedByLevelHeroes = heroes.sort((a, b) => {
        return a.level - b.level;
    });
    //console.log(sortedByLevel[0]);

    for (let hero of sortedByLevelHeroes) {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items}`);
    }
}
inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]);