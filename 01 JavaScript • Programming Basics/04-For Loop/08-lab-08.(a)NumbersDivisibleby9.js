function solve(input) {

    let n1 = Number(input[0]);
    let n2 = Number(input[1]);
    let sum = 0;
    let result = "";

    for (let i = n1; i <= n2; i++) {
        if (i % 9 === 0) {
            sum += i;
            result += `${i} \n`;
        }
    }
    console.log(`The sum: ${sum}`);
    console.log(result);
}
solve(["100", "200"]);


/*

function loopsDemo(input) {

    let num1 = Number(input[0]);
    let num2 = Number(input[1]);

    let sum = 0;

    for (let i = num1; i <= num2; i++) {
        if (i % 9 == 0) {
            sum += i;            
        }
    }
    console.log(`The sum: ${sum}`);

    for (let i = num1; i <= num2; i++) {

        if (i % 9 == 0) {
            let current = i;
            console.log(`${i}`);
        }
    }
}
loopsDemo(["100", "200"]);

*/

















