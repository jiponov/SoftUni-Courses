function experienceGaining(inputArr) {
    let neededExp = inputArr.shift();
    let battlesCount = inputArr.shift();
    let index = 0;
    let command = inputArr[index];
    index++;
    let total = 0;
    let counter = 0;

    for (let i = 1; i <= battlesCount; i++) {
        let currentEarnedExp = command;

        if (i === 3) {
            currentEarnedExp *= 1.15;
        }
        if (i === 5) {
            currentEarnedExp *= 0.90;
        }
        if (i === 15) {
            currentEarnedExp *= 1.05;
        }

        total += currentEarnedExp;
        counter++;

        if (total >= neededExp) {
            console.log(`Player successfully collected his needed experience for ${counter} battles.`)
            return;
        }

        command = inputArr[index++];
    }

    let difference = Math.abs(total - neededExp);

    if (total < neededExp) {
        console.log(`Player was not able to collect the needed experience, ${difference.toFixed(2)} more needed.`)
    }
}

experienceGaining([500,
    5,
    50,
    100,
    200,
    100,
    30]);
console.log('---');
experienceGaining([500,
    5,
    50,
    100,
    200,
    100,
    20]);
console.log('---');
experienceGaining([400,
    5,
    50,
    100,
    200,
    100,
    20]);
