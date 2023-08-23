function solve(input) {

    let nameMovie = input[0];
    let episodeMinutes = Number(input[1]);
    let relaxMinutes = Number(input[2]);
    let lunchMinutes = relaxMinutes / 8;
    let restMinutes = relaxMinutes / 4;

    let timeLeft = relaxMinutes - lunchMinutes - restMinutes;

    let diff = Math.abs(timeLeft - episodeMinutes);
    if (timeLeft >= episodeMinutes) {
        console.log(`You have enough time to watch ${nameMovie} and left with ${Math.ceil(diff)} minutes free time.`)
    } else {
        console.log(`You don't have enough time to watch ${nameMovie}, you need ${Math.ceil(diff)} more minutes.`)
    }
}
solve(["Game of Thrones", "60", "96"]);