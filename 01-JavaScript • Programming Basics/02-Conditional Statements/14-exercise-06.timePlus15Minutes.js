function solve(input) {

    let hour = Number(input[0]);
    let min = Number(input[1]);

    let minPlus = min + 15;
    if (minPlus > 59) {
        hour += 1;
        minPlus -= 60;
    }
    if (hour > 23) {
        hour = 0;
    }
    if (minPlus < 10) {
        console.log(`${hour}:0${minPlus}`);
    } else {
        console.log(`${hour}:${minPlus}`);
    }

}
solve(["1", "46"]);