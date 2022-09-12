function solve(input) {

    let worldRecord = Number(input[0]);
    let distance = Number(input[1]);
    let timePerOneMeter = Number(input[2]);

    let resistanceCoef = Math.floor(distance / 15);

    let timeIvan = distance * timePerOneMeter;
    let extraTimeIvan = resistanceCoef * 12.5;
    let time = timeIvan + extraTimeIvan;

    let difference = time - worldRecord;

    if (difference < 0) {
        let diff = Math.abs(time - worldRecord);
        console.log(`Yes, he succeeded! The new world record is ${time.toFixed(2)} seconds.`);
    } else {
        let diff = Math.abs(time - worldRecord);
        console.log(`No, he failed! He was ${diff.toFixed(2)} seconds slower.`);
    }

}
solve(["10464", "1500", "20"]);