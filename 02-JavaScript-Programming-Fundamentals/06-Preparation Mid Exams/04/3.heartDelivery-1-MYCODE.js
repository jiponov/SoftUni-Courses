function heartDelivery(input) {          // 100/100
    let neighborhood = input.shift().split('@').map(Number);
    let lastPositionIndex = 0;
    let firstHouseIndex = 0;


    while (input[0] != undefined) {
        let command = input.shift();
        if (command == 'Love!') {
            break;
        }

        command = command.split(' ');
        let operationJump = command[0];
        let lengthJump = Number(command[1]);


        let secondHouseIndex = firstHouseIndex + lengthJump;

        if (secondHouseIndex < 0 || secondHouseIndex > neighborhood.length - 1) {
            firstHouseIndex = 0;
            lastPositionIndex = 0;

            let targetHouse = neighborhood[firstHouseIndex];
            let reducedHouse = targetHouse - 2;

            if (targetHouse == 0) {
                console.log(`Place ${firstHouseIndex} already had Valentine's day.`);
            } else {
                if (reducedHouse <= 0) {
                    reducedHouse = 0;
                    console.log(`Place ${firstHouseIndex} has Valentine's day.`);
                }
                neighborhood.splice(firstHouseIndex, 1, reducedHouse);
            }

            continue;
        }


        let targetHouse = neighborhood[secondHouseIndex];
        let reducedHouse = targetHouse - 2;

        if (targetHouse == 0) {
            console.log(`Place ${secondHouseIndex} already had Valentine's day.`);
        } else {
            if (reducedHouse <= 0) {
                reducedHouse = 0;
                console.log(`Place ${secondHouseIndex} has Valentine's day.`);
            }
            neighborhood.splice(secondHouseIndex, 1, reducedHouse);
        }

        firstHouseIndex = secondHouseIndex;
        lastPositionIndex = secondHouseIndex;
    }


    console.log(`Cupid's last position was ${lastPositionIndex}.`);

    let celebrateHouses = 0;
    for (let el of neighborhood) {
        if (el == 0) {
            celebrateHouses++;
        }
    }
    let didntCelebrateHouses = neighborhood.length - celebrateHouses;


    let everyHouseHasValentineDay = neighborhood.every(el => el == 0);
    if (everyHouseHasValentineDay) {
        console.log(`Mission was successful.`);
    } else {
        console.log(`Cupid has failed ${didntCelebrateHouses} places.`);
    }
}

heartDelivery([
    "10@10@10@2",
    "Jump 1",
    "Jump 2",
    "Love!"]);
console.log('-------');
heartDelivery([
    "2@4@2",
    "Jump 2",
    "Jump 2",
    "Jump 8",
    "Jump 3",
    "Jump 1",
    "Love!"]);

