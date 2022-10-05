function solve(input) {

    let n = Number(input[0]);
    let salary = Number(input[1]);

    let inputL = input.length;

    for (let i = 2; i < inputL; i++) {

        let type = input[i];

        switch (type) {
            case 'Facebook': salary = salary - 150; break;
            case 'Reddit': salary = salary - 50; break;
            case 'Instagram': salary = salary - 100; break;
        }
    }

    let diff = Math.abs(salary);

    if (salary <= 0) {
        console.log(`You have lost your salary.`);
    } else {
        console.log(`${(diff)}`)
    }
}

solve(["3",
    "500",
    "Facebook",
    "Stackoverflow.com",
    "softuni.bg"])



