function blackFlag(input) {          // 100/100

    let days = Number(input.shift());
    let plunderForDay = Number(input.shift());
    let targetPlunder = Number(input.shift());

    let plunder = 0;
    //let plunderTotal = days * plunderForDay;
    for (let i = 1; i <= days; i++) {
        plunder += plunderForDay;
        if (i % 3 == 0) {
            let additional = plunderForDay * 0.5;
            plunder += additional;
        }

        if (i % 5 == 0) {
            let lose = plunder * 0.3;
            plunder -= lose;
        }
    }

    if (plunder >= targetPlunder) {
        console.log(`Ahoy! ${plunder.toFixed(2)} plunder gained.`);
    } else {
        let diff = (plunder / targetPlunder) * 100;
        console.log(`Collected only ${diff.toFixed(2)}% of the plunder.`);
    }
}

blackFlag([
    "5",
    "40",
    "100"]);
console.log('-------');
blackFlag([
    "10",
    "20",
    "380"]);

