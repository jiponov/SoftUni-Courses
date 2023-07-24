function needForSpeedIII(input) {          // 100/100

    let n = Number(input.shift());
    let cars = input.splice(0, n);
    //console.log(cars)
    let catalog = {};

    for (let line of cars) {
        line = line.split('|');
        let car = line[0];
        let mileage = Number(line[1]);
        let fuelAvailable = Number(line[2]);

        if (!catalog.hasOwnProperty(car)) {
            catalog[car] = {};
            catalog[car].mileage = mileage;
            catalog[car].fuelAvailable = fuelAvailable;
        }
    }

    //console.log(catalog)
    while (input[0] != undefined) {
        let command = input.shift();
        if (command == 'Stop') {
            break;
        }

        command = command.split(' : ');
        let operation = command.shift();

        if (operation == 'Drive') {
            let carGiven = command.shift();
            let distanceGiven = Number(command.shift());
            let fuelGiven = Number(command.shift());
            if (catalog.hasOwnProperty(carGiven)) {
                if (catalog[carGiven]['fuelAvailable'] < fuelGiven) {
                    console.log(`Not enough fuel to make that ride`);
                } else {
                    catalog[carGiven].mileage += distanceGiven;
                    catalog[carGiven].fuelAvailable -= fuelGiven;
                    console.log(`${carGiven} driven for ${distanceGiven} kilometers. ${fuelGiven} liters of fuel consumed.`);
                }
            }

            if (catalog[carGiven].mileage >= 100000) {
                delete catalog[carGiven];
                console.log(`Time to sell the ${carGiven}!`);
            }


        } else if (operation == 'Refuel') {
            let carGiven = command.shift();
            let fuelGiven = Number(command.shift());
            let max = 75;
            if (catalog.hasOwnProperty(carGiven)) {
                let difference = max - catalog[carGiven].fuelAvailable;
                if (fuelGiven > difference) {
                    catalog[carGiven].fuelAvailable = max;
                    console.log(`${carGiven} refueled with ${difference} liters`);
                } else {
                    catalog[carGiven].fuelAvailable += fuelGiven;
                    console.log(`${carGiven} refueled with ${fuelGiven} liters`);
                }
            }


        } else if (operation == 'Revert') {
            let carGiven = command.shift();
            let kmGiven = Number(command.shift());
            if (catalog.hasOwnProperty(carGiven)) {
                catalog[carGiven].mileage -= kmGiven;

                if (catalog[carGiven].mileage < 10000) {
                    catalog[carGiven].mileage = 10000;
                } else {
                    console.log(`${carGiven} mileage decreased by ${kmGiven} kilometers`);
                }
            }
        }
    }

    for (let car in catalog) {
        console.log(`${car} -> Mileage: ${catalog[car].mileage} kms, Fuel in the tank: ${catalog[car].fuelAvailable} lt.`);
    }
}

needForSpeedIII([
    '3',
    'Audi A6|38000|62',
    'Mercedes CLS|11000|35',
    'Volkswagen Passat CC|45678|5',
    'Drive : Audi A6 : 543 : 47',
    'Drive : Mercedes CLS : 94 : 11',
    'Drive : Volkswagen Passat CC : 69 : 8',
    'Refuel : Audi A6 : 50',
    'Revert : Mercedes CLS : 500',
    'Revert : Audi A6 : 30000',
    'Stop'
]);
console.log('-------');
needForSpeedIII([
    '4',
    'Lamborghini Veneno|11111|74',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 82',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 40',
    'Revert : Bugatti Veyron : 2000',
    'Stop'
]);

