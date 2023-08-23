function graduation(input) {

    let index = 0;
    let name = input[index];
    index++;

    let grade = 1;
    let badGradeCounter = 0;
    let sumGrade = 0;
    let isExcluded = false;

    while (grade <= 12) {

        let tempGrade = Number(input[index]);
        index++;

        if (tempGrade < 4.00) {
            badGradeCounter++;

            if (badGradeCounter >= 2) {
                isExcluded = true;
                console.log(`${name} has been excluded at ${grade} grade`)
                break;
            }
            continue;
        }

        sumGrade += tempGrade;
        grade++;

    }
    if (!isExcluded) {
        let average = sumGrade / 12;
        console.log(`${name} graduated. Average grade: ${average.toFixed(2)}`)
    }

}
graduation(["Mimi",
    "5",
    "6",
    "5",
    "6",
    "5",
    "6",
    "6",
    "2",
    "3"])

