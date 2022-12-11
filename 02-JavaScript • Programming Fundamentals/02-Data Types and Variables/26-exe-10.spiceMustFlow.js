function spiceMustFlow(startingYield) {

    let days = 0;
    let yield = startingYield;
    let isProfitable = true;

    let extracted = 0;

    while (isProfitable) {
        if (yield < 100) {
            isProfitable = false;
            if (extracted >= 26) {
                extracted -= 26;
            }
            break;
        } else if (yield >= 100) {
            isProfitable = true;
            extracted += yield;
            if (extracted >= 26) {
                extracted -= 26;
            }
        }
        days++;
        yield -= 10;
    }

    console.log(`${days}`);
    console.log(`${extracted}`);
}
spiceMustFlow(111);
spiceMustFlow(450);