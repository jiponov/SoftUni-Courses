function solve(input) {

    let index = 0;
    let actorName = input[index];
    index++;
    let points = Number(input[index]);
    index++;
    let nJury = Number(input[index]);
    index++;

    let inputL = input.length;

    for (let i = 0; i < nJury; i++) {
        let juryName = input[index];
        index++;
        let juryPoints = Number(input[index]);
        index++;

        points += (juryName.length * juryPoints) / 2;

        if (points > 1250.5) {
            console.log(`Congratulations, ${actorName} got a nominee for leading role with ${points.toFixed(1)}!`);
            break;
        }
    }

    if (points <= 1250.5) {
        let diff = Math.abs(1250.5 - points);
        console.log(`Sorry, ${actorName} you need ${diff.toFixed(1)} more!`)
    }
}
solve(["Zahari Baharov",
    "205",
    "4",
    "Johnny Depp",
    "45",
    "Will Smith",
    "29",
    "Jet Lee",
    "10",
    "Matthew Mcconaughey",
    "39"]);

/*

function solve(input) {

    let index = 0;
    let nameActor = input[index];
    index++;
    let pointsTotal = Number(input[index]);
    index++;
    let nJudges = Number(input[index]);
    index++;

    for (let i = 0; i < nJudges; i++) {
        let currentNameJudge = input[index];
        index++;
        let currentPointsJudge = Number(input[index]);
        index++;

        let markJudge = ((Number(currentNameJudge.length)) * currentPointsJudge) / 2;
        pointsTotal += markJudge;
        if (pointsTotal > 1250.5) {
            console.log(`Congratulations, ${nameActor} got a nominee for leading role with ${pointsTotal.toFixed(1)}!`)
            break;
        }
    }

    if (pointsTotal <= 1250.5) {
        let diff = Math.abs(pointsTotal - 1250.5);
        console.log(`Sorry, ${nameActor} you need ${diff.toFixed(1)} more!`);
    }
}
solve(["Zahari Baharov",
    "205",
    "4",
    "Johnny Depp",
    "45",
    "Will Smith",
    "29",
    "Jet Lee",
    "10",
    "Matthew Mcconaughey",
    "39"]);

*/
