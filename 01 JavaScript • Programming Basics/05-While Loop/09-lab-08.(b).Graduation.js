function solve(input) {

    let index = 0;
    let name = input[index];
    index++;
    let mark = Number(input[index]);
    let avg = 0;
    let badCounter = 0;
    let goodCounter = 0;
    let classCounter = 0;

    while (mark >= 2) {
        classCounter++;
        if (mark >= 4) {
            avg += mark;
            goodCounter++;
        } if (goodCounter == 12) {
            let finalMark = avg / 12;
            console.log(`${name} graduated. Average grade: ${finalMark.toFixed(2)}`);
        }

        if (mark < 4) {
            badCounter++;
        } if (badCounter >= 2) {
            console.log(`${name} has been excluded at ${classCounter - 1} grade`)
            break;
        }

        index++;
        mark = Number(input[index]);
    }
}

solve(["Mimi", "5", "6", "5", "6", "5", "6", "6", "2", "3"]);

//solve(["Gosho", "5", "5.5", "6", "5.43", "5.5", "6", "5.55", "5", "6", "6", "5.43", "5"]);