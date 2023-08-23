function shootForTheWin(input) {                // 100/100

    let targets = input.shift().split(" ").map(Number);

    let index = 0;
    let command = input[index];
    index++;

    let counter = 0;

    while (command !== "End") {
        let currentIndex = Number(command);
        let currentTarget = targets[currentIndex];

        if (currentTarget === -1) {
            command = input[index++];
            continue;
        }

        if (currentIndex < targets.length) {
            counter++;


            for (let i = 0; i < targets.length; i++) {
                let currentShoot = targets[i];

                if (currentShoot === -1) {
                    continue;
                }


                if (currentTarget < currentShoot) {
                    currentShoot -= currentTarget;
                    targets.splice(i, 1, currentShoot)

                } else if (currentTarget >= currentShoot) {
                    currentShoot += currentTarget;
                    targets.splice(i, 1, currentShoot)
                }
            }

            targets.splice(currentIndex, 1, -1);
        }

        command = input[index];
        index++;
    }

    console.log(`Shot targets: ${counter} -> ${targets.join(' ')}`)
}

shootForTheWin([
    "24 50 36 70",
    "0",
    "4",
    "3",
    "1",
    "End"
]);
console.log('----------------------------------------------------------------------------');
shootForTheWin([
    "30 30 12 60 54 66",
    "5",
    "2",
    "4",
    "0",
    "End"
]);



