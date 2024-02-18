function theBiscuitFactory(inputArr) {      // 100/100
    let myBiscuits = Number(inputArr[0]);
    let myWorkers = Number(inputArr[1]);
    let targetBiscCount = Number(inputArr[2]);
    let total = 0;
    let normalProduction = myWorkers * myBiscuits;

    for (let i = 1; i <= 30; i++) {
        if (i % 3 == 0) {
            total += Math.floor(normalProduction * 0.75);
        } else {
            total += Math.floor(normalProduction);
        }
    }
    let compare = targetBiscCount - total;
    let diff = Math.abs(compare);
    let finalAsPercent = (diff / targetBiscCount) * 100;

    console.log(`You have produced ${total} biscuits for the past month.`);
    if (compare > 0) {
        console.log(`You produce ${finalAsPercent.toFixed(2)} percent less biscuits.`)
    } else if (compare < 0) {
        console.log(`You produce ${finalAsPercent.toFixed(2)} percent more biscuits.`)
    }
}

theBiscuitFactory(["78",
    "8",
    "16000"]);
console.log('---')
theBiscuitFactory((["65",
    "12",
    "26000"])
);
console.log('---')
theBiscuitFactory((["163",
    "16",
    "67020"])
);
