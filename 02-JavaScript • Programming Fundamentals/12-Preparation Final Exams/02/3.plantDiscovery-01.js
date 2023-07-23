function plantDiscovery(input) {          // 100/100

    let n = Number(input.shift());
    let catalog = {};

    let actions = {
        'Rate': rate,
        'Update': update,
        'Reset': reset,
    }

    for (let i = 0; i < n; i++) {
        let [plant, rarity] = input.shift().split("<->");
        rarity = Number(rarity);

        catalog[plant] = {
            rarity,
            ratings: [],
            counter: 0,
        }
    }

    while (input[0] != 'Exhibition') {
        let tokens = input.shift().split(": ");
        let operation = tokens[0];
        let params = tokens[1];

        let action = actions[operation];
        action(params);
    }


    function rate(params) {
        // "Rate: {plant} - {rating}" – add the given rating to the plant (store all ratings)
        let [plant, num] = params.split(" - ");
        num = Number(num);

        if (catalog.hasOwnProperty(plant)) {
            catalog[plant].ratings.push(num);

        } else {
            console.log('error');
        }
    }

    function update(params) {
        // "Update: {plant} - {new_rarity}" – update the rarity of the plant with the new one
        let [plant, newRarity] = params.split(" - ");
        newRarity = Number(newRarity);

        if (catalog.hasOwnProperty(plant)) {
            catalog[plant].rarity = newRarity;
        } else {
            console.log('error');
        }

    }

    function reset(params) {
        //"Reset: {plant}" – remove all the ratings of the given plant
        let plant = params;
        if (catalog.hasOwnProperty(plant)) {
            catalog[plant].ratings.length = 0;
        } else {
            console.log("error");
        }

    }


    let entries = Object.entries(catalog)

    console.log(`Plants for the exhibition:`)

    for (let [name, properties] of entries) {

        if (catalog[name].ratings.length > 0) {
            let current = catalog[name].ratings.reduce((a, v) => a + v, 0) / catalog[name].ratings.length;
            catalog[name].counter = current;
            console.log(`- ${name}; Rarity: ${properties.rarity}; Rating: ${properties.counter.toFixed(2)}`)

        } else {
            console.log(`- ${name}; Rarity: ${properties.rarity}; Rating: ${properties.counter.toFixed(2)}`)
        }
    }
}

plantDiscovery([
    "3",
    "Arnoldii<->4",
    "Woodii<->7",
    "Welwitschia<->2",
    "Rate: Woodii - 10",
    "Rate: Welwitschia - 7",
    "Rate: Arnoldii - 3",
    "Rate: Woodii - 5",
    "Update: Woodii - 5",
    "Reset: Arnoldii",
    "Exhibition"
]);

console.log('-------');

plantDiscovery([
    "2",
    "Candelabra<->10",
    "Oahu<->10",
    "Rate: Oahu - 7",
    "Rate: Candelabra - 6",
    "Exhibition"
]);

