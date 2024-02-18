function bonusScoringSystem(input) {          // 100/100
    let studentsCount = Number(input.shift());
    let lecturesTotal = Number(input.shift());
    let additionalBonus = Number(input.shift());

    input = input.map(Number)

    let studentAttendances = 0;
    let studentMaxBonus = 0;

    for (let el of input) {
        let currentAttendancesStudent = el;
        let totalBonusStudent = (currentAttendancesStudent / lecturesTotal) * (5 + additionalBonus);

        if (studentMaxBonus <= totalBonusStudent) {
            studentMaxBonus = totalBonusStudent;
            studentAttendances = currentAttendancesStudent;
        }
    }

    console.log(`Max Bonus: ${Math.ceil(studentMaxBonus)}.`);
    console.log(`The student has attended ${Math.ceil(studentAttendances)} lectures.`);
}

bonusScoringSystem([
    '5',
    '25',
    '30',
    '12',
    '19',
    '24',
    '16',
    '20']);
console.log('-------');
bonusScoringSystem([
    '10', '30', '14', '8',
    '23', '27', '28', '15',
    '17', '25', '26', '5',
    '18']);
