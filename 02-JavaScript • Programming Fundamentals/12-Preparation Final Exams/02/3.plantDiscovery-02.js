function plantDiscovery(input) {          // 100/100

    let n = Number(input.shift());
    let dataPlants = input.splice(0, n)
    let catalog = {};

    for (let el of dataPlants) {
        let line = el.split('<->');
        let plant = line.shift();
        let rarity = Number(line.shift());

        if (!catalog.hasOwnProperty(plant)) {
            catalog[plant] = {};
        }
        catalog[plant].rarity = rarity;
        catalog[plant].rating = [];
        catalog[plant].countRatings = 0;
    }


    while (input[0] != undefined) {
        let token = input.shift();
        if (token == 'Exhibition') {
            break;
        }

        token = token.split(': ');
        let operation = token.shift();

        if (operation == 'Rate') {
            token = token.join().split(' - ');
            let plantCurrent = token.shift();
            let ratingCurrent = Number(token.shift());

            if (catalog.hasOwnProperty(plantCurrent)) {
                catalog[plantCurrent].rating.push(ratingCurrent);
                catalog[plantCurrent].countRatings++;

            } else {
                console.log(`error`);
            }


        } else if (operation == 'Update') {
            let [plantCurrent, newRarity] = token.shift().split(' - ');
            newRarity = Number(newRarity);
            if (catalog.hasOwnProperty(plantCurrent)) {
                catalog[plantCurrent].rarity = newRarity;
            } else {
                console.log(`error`);
            }


        } else if (operation == 'Reset') {
            let plantCurrent = token.shift();
            if (catalog.hasOwnProperty(plantCurrent)) {
                catalog[plantCurrent].rating = [];
                catalog[plantCurrent].countRatings = 0;
            } else {
                console.log(`error`);
            }
        }
    }
    //console.log(catalog)

    console.log(`Plants for the exhibition:`);
    let entries = Object.entries(catalog);
    //console.log(entries)

    for (let [namePlant, properties] of entries) {
        //console.log(properties)

        let sum = 0;
        properties.rating.forEach(element => {
            return sum += element;
        });

        let avg = 0;
        if (sum > 0) {
            avg = sum / properties.countRatings;
        }

        console.log(`- ${namePlant}; Rarity: ${properties.rarity}; Rating: ${avg.toFixed(2)}`);
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

