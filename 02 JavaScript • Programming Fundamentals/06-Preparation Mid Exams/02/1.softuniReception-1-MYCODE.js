function softuniReception(input) {          // 100/100
    let empA = Number(input.shift());
    let empB = Number(input.shift());
    let empC = Number(input.shift());
    let studentsCount = Number(input.shift());

    let totalStudentsPerHour = empA + empB + empC;
    let timeCounter = 0;

    while (studentsCount > 0) {
        timeCounter++;
        if (timeCounter % 4 == 0) {
            continue;
        }
        studentsCount -= totalStudentsPerHour;
    }

    console.log(`Time needed: ${timeCounter}h.`);
}

softuniReception(['5', '6', '4', '20']);
console.log('-------');
softuniReception(['1', '2', '3', '45']);
console.log('-------');
softuniReception(['3', '2', '5', '40']);