function solve(num1, num2, num3) {

    let totalNegative = 0;

    if (isNegative(num1)) {
        totalNegative++;
    }
    if (isNegative(num2)) {
        totalNegative++;
    }
    if (isNegative(num3)) {
        totalNegative++;
    }


    function isNegative(number) {
        return number < 0;                  // връща true
    }


    if (totalNegative % 2 == 0) {
        return "Positive"                   // или така може запис: console.log("Positive")
    } else {
        return "Negative"                   // или така може запис: console.log("Negative")
    }

}
console.log(solve(5, 12, -15));
console.log(solve(-6, -12, 14));
console.log(solve(-1, -2, -3));
console.log(solve(-5, 1, 1))