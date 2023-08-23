function heartDelivery(array) {             // 100/100
    let neighborhood = array.shift().split(`@`).map(Number);
    let index = 0;
    let command = array[index++];
    let lastPlace = 0;
    let count = 0;

    while (command !== "Love!") {
        let tokens = command.split(` `);
        let jumpLength = Number(tokens[1]);
        lastPlace += jumpLength;

        if (lastPlace > neighborhood.length - 1) {
            lastPlace = 0;
        }
        neighborhood[lastPlace] -= 2;

        if (neighborhood[lastPlace] === 0) {
            count++;
            console.log("Place" + ` ${lastPlace} ` + "has Valentine's day.");
        }
        if (neighborhood[lastPlace] < 0) {
            console.log("Place" + ` ${lastPlace} ` + "already had Valentine's day.");
        }

        command = array[index++];
    }

    console.log("Cupid's last position was" + ` ${lastPlace}` + ".");

    if (neighborhood.length === count) {
        console.log("Mission was successful.");
    } else {
        console.log(
            "Cupid has failed" + ` ${neighborhood.length - count} ` + "places."
        );
    }
}

heartDelivery(["10@10@10@2", "Jump 1", "Jump 2", "Love!"]);
heartDelivery(["2@2@2", "Jump 1", "Jump 1", "Jump 1", "Love!"]);
heartDelivery(["2@4@2", "Jump 2", "Jump 2", "Jump 8", "Jump 3", "Jump 1", "Love!",]);