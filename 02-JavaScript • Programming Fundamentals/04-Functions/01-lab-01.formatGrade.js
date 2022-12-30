function solve(grade) {
    let formatted = grade.toFixed(2);  // числото ще се превърне в стринг
    let description;

    if (grade < 3) {
        formatted = '2';
        description = 'Fail';
    } else if (grade < 3.5) {
        description = 'Poor'
    } else if (grade < 4.5) {
        description = 'Good'
    } else if (grade < 5.5) {
        description = 'Very good'
    } else {
        description = 'Excellent'
    }
    console.log(`${description} (${formatted})`)
}

solve(3.33);
solve(4.50);
solve(2.99);