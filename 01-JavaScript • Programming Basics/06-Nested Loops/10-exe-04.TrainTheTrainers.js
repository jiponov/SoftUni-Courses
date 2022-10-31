function solve(input) {

    let index = 0;
    let jury = Number(input[index]);
    index++;
    let command = input[index];
    index++;

    let avgPresentationScore = 0;
    let tasks = 0;

    while (command != 'Finish') {
        let avgGradeScore = 0;
        let presentation = command;

        for (let i = 0; i < jury; i++) {
            let currentGrade = Number(input[index]);
            avgGradeScore += currentGrade;
            avgPresentationScore += currentGrade;
            tasks++;
            index++;
        }
        let printAvg = avgGradeScore / jury;
        console.log(`${presentation} - ${printAvg.toFixed(2)}.`);

        command = input[index];
        index++;
    }

    let printAllPrScore = avgPresentationScore / tasks;
    console.log(`Student's final assessment is ${printAllPrScore.toFixed(2)}.`)
}
solve(["2", "While-Loop", "6.00", "5.50", "For-Loop", "5.84", "5.66", "Finish"]);


