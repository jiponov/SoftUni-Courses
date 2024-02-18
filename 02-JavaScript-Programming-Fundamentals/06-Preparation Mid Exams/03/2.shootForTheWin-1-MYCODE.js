function shootForTheWin(input) {          // 100/100
    let numbers = input.shift().split(' ').map(Number);
    let countShots = 0;

    while (input.length > 0) {
        let command = input.shift();
        if (command == 'End') {
            console.log(`Shot targets: ${countShots} -> ${numbers.join(' ')}`);
            break;
        }

        let currentIndex = Number(command);
        let currentTarget = numbers[currentIndex];
        let consideredShot = false;

        if (currentTarget == -1) {
            continue;
        }


        if (currentIndex >= 0 && currentIndex <= numbers.length - 1) {
            consideredShot = true;

            for (let i = 0; i < numbers.length; i++) {
                let boom = numbers[i];
                if (currentTarget < boom && boom != -1) {   // i != currentIndex && 
                    boom = boom - currentTarget;
                    numbers.splice(i, 1, boom);
                } else if (currentTarget >= boom && boom != -1) {   // i != currentIndex && 
                    boom = boom + currentTarget;
                    numbers.splice(i, 1, boom);
                }
            }

            countShots++;
            numbers.splice(currentIndex, 1, -1);
        }
    }
}

shootForTheWin([
    "24 50 36 70",
    "0",
    "4",
    "3",
    "1",
    "End"]);
console.log('-------');
shootForTheWin([
    "30 30 12 60 54 66",
    "5",
    "2",
    "4",
    "0",
    "End"]);



