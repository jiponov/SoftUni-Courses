function examPreparation(input) {

    let index = 0;
    let mainBadMarks = Number(input[index]);
    index++;

    let command = input[index];
    index++;

    let counter = 0;
    let sumScore = 0;
    let taskCounter = 0;
    let lastTask = "";

    let isNeedABreak = false;

    while (command !== 'Enough') {
        let taskName = command;
        lastTask = taskName;
        let mark = Number(input[index]);
        index++;
        taskCounter++;
        sumScore += mark;

        if (mark <= 4) {
            counter++;
        }

        if (counter === mainBadMarks) {
            console.log(`You need a break, ${counter} poor grades.`)
            isNeedABreak = true;
            break;
        }

        command = input[index];
        index++;
    }

    if (!isNeedABreak) {
        let avg = sumScore / taskCounter;
        console.log(`Average score: ${avg.toFixed(2)}`)
        console.log(`Number of problems: ${taskCounter}`)
        console.log(`Last problem: ${lastTask}`)
    }
}
examPreparation(["3",
    "Money",
    "6",
    "Story",
    "4",
    "Spring Time",
    "5",
    "Bus",
    "6",
    "Enough"]);
