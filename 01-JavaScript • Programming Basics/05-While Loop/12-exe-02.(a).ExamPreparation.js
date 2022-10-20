function solve(input) {

    let index = 0;
    let maxBadMarks = Number(input[index]);
    index++;
    let data = input[index];
    index++;

    let avgMarks = 0;
    let counterMarks = 0;
    let allBadMarks = 0;

    let isFail = false;
    let lastTask;

    while (true) {
        let currentMark = Number(input[index]);

        if (data == 'Enough') {
            isFail = false;
            break;
        }

        if (currentMark <= 4) {
            allBadMarks++;
            avgMarks += currentMark;
            counterMarks++;
            if (allBadMarks == maxBadMarks) {
                isFail = true;
                break;
            }
        } else {
            avgMarks += currentMark;
            counterMarks++;
            isFail = false;
        }

        lastTask = data;
        index++;
        data = input[index];
        index++;
    }

    let score = avgMarks / counterMarks;

    if (isFail) {
        console.log(`You need a break, ${allBadMarks} poor grades.`)
    } else {
        console.log(`Average score: ${score.toFixed(2)}`);
        console.log(`Number of problems: ${counterMarks}`);
        console.log(`Last problem: ${lastTask}`);
    }
}
solve(["3",
    "Money",
    "6",
    "Story",
    "4",
    "Spring Time",
    "5",
    "Bus",
    "6",
    "Enough"]);

