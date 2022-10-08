function solve(input) {

    let index = 0;
    let tournaments = Number(input[index]);
    index++;
    let pointsStarting = Number(input[index]);  // 1400
    index++;

    let points = pointsStarting;    // 1400

    let inputL = input.length;

    let wins = 0;

    for (let i = 0; i < inputL; i++) {
        let stage = input[index];
        index++;
        switch (stage) {

            case 'W':
                points += 2000;
                wins++;             // wins++; това реално се явява БРОЯЧ (n-пъти Победа)
                break;

            case 'F':
                points += 1200;
                break;

            case 'SF':
                points += 720;
                break;
        }
    }

    let avgPoints = (points - pointsStarting) / tournaments;
    let percentWins = (wins / tournaments) * 100;

    console.log(`Final points: ${points}`);
    console.log(`Average points: ${Math.floor(avgPoints)}`);
    console.log(percentWins.toFixed(2) + '%');

}
solve(["5",
    "1400",
    "F",
    "SF",
    "W",
    "W",
    "SF"]);

/*

function solve(input) {

    let index = 0;
    let tournaments = Number(input[index]);
    index++;
    let pointsTotal = Number(input[index]);
    index++;

    let pointsTournamentsOnly = 0;
    let wins = 0;

    for (let i = 0; i < tournaments; i++) {
        let currentStage = input[index];
        index++;

        if (currentStage == 'W') {
            pointsTotal += 2000;
            pointsTournamentsOnly += 2000;
            wins++;
        } else if (currentStage == 'F') {
            pointsTotal += 1200;
            pointsTournamentsOnly += 1200;
        } else if (currentStage == 'SF') {
            pointsTotal += 720;
            pointsTournamentsOnly += 720;
        }
    }

    let averagePoints = pointsTournamentsOnly / tournaments;
    let averageTournamentsWin = wins / tournaments * 100;

    console.log(`Final points: ${pointsTotal}`);
    console.log(`Average points: ${Math.floor(averagePoints)}`);
    console.log(`${averageTournamentsWin.toFixed(2)}%`);
}
solve(["7",
    "1200",
    "SF",
    "F",
    "W",
    "F",
    "W",
    "SF",
    "W"]);

*/

