function bonusScoringSystem(input) {                // 100/100

    let studentsCount = Number(input.shift());
    let lectures = Number(input.shift());
    let initialBonusPoints = Number(input.shift());

    let maxBonus = 0;
    let thisStudentLectures = 0;

    while (input[0] != undefined) {                       // while (input.length > 0)           
        let currentAttendances = Number(input.shift());
        let totalPoints = (currentAttendances / lectures) * (5 + initialBonusPoints);
        if (maxBonus <= totalPoints) {
            maxBonus = totalPoints;
            thisStudentLectures = currentAttendances;
        }
    }

    console.log(`Max Bonus: ${Math.ceil(maxBonus)}.`);
    console.log(`The student has attended ${thisStudentLectures} lectures.`);
}

bonusScoringSystem([
    '5',
    '25',
    '30',
    '12',
    '19',
    '24',
    '16',
    '20'
]);
console.log('----------------------------------------------------------------------------');
bonusScoringSystem([
    '10', '30', '14', '8',
    '23', '27', '28', '15',
    '17', '25', '26', '5',
    '18'
]);