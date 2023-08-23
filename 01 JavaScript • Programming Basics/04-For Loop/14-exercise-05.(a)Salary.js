function solve(input) {

    let index = 0;

    let n = Number(input[index]);
    index++;
    let salary = Number(input[index]);
    index++;

    let inputL = input.length;

    for (let i = 0; i < n; i++) {

        let currentTab = input[index];
        index++;

        switch (currentTab) {
            case 'Facebook': salary -= 150; break;
            case 'Reddit': salary -= 50; break;
            case 'Instagram': salary -= 100; break;

        } if (salary <= 0) {
            console.log(`You have lost your salary.`);
            break;
        }
    }
    if (salary > 0) {
        console.log(salary)
    }
}

solve(["3",
    "500",
    "Facebook",
    "Stackoverflow.com",
    "softuni.bg"]);

/*

function solve(input) {

    let index = 0;
    let tabs = Number(input[index]);
    index++;
    let salary = Number(input[index]);
    index++;

    let inputL = input.length;

    for (let i = 0; i < tabs; i++) {
        let currentTab = input[index];
        index++;
        if (currentTab == 'Facebook') {
            salary -= 150;
            if (salary <= 0) {
                console.log(`You have lost your salary.`)
                break;
            }
        } else if (currentTab == 'Instagram') {
            salary -= 100;
            if (salary <= 0) {
                console.log(`You have lost your salary.`)
                break;
            }
        } else if (currentTab == 'Reddit') {
            salary -= 50;
            if (salary <= 0) {
                console.log(`You have lost your salary.`)
                break;
            }
        }
    }

    if (salary > 0) {
        console.log(`${salary}`)
    }
}
solve(["3",
    "500",
    "Facebook",
    "Stackoverflow.com",
    "softuni.bg"]);

*/





