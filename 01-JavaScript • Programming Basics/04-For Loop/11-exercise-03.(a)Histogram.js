function solve(input) {

    let index = 0;
    let numbersCount = Number(input[index]);
    index++;

    let inputL = input.length;

    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;

    for (let i = 0; i < inputL; i++) {
        let currentNumber = Number(input[index]);
        index++;

        if (currentNumber < 200) {
            p1++;
        } else if (currentNumber <= 399) {
            p2++;
        } else if (currentNumber <= 599) {
            p3++;
        } else if (currentNumber <= 799) {
            p4++;
        } else if (currentNumber >= 800) {
            p5++;
        }

    }
    console.log(`${(p1 / numbersCount * 100).toFixed(2)}%`);
    console.log(`${(p2 / numbersCount * 100).toFixed(2)}%`);
    console.log(`${(p3 / numbersCount * 100).toFixed(2)}%`);
    console.log(`${(p4 / numbersCount * 100).toFixed(2)}%`);
    console.log(`${(p5 / numbersCount * 100).toFixed(2)}%`);

    //p1 = 12 / 20 * 100 = 60.00%

}
solve(["3",
    "1",
    "2",
    "999"]);


/*

function solve(input) {

    let index = 0;
    let n = Number(input[index]);
    index++;

    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;

    for (let i = 1; i <= n; i++) {
        let current = Number(input[index]);
        index++;
        if (current < 200) {
            p1++;
        } else if (current >= 200 && current <= 399) {
            p2++;
        } else if (current >= 400 && current <= 599) {
            p3++
        } else if (current >= 600 && current <= 799) {
            p4++;
        } else if (current >= 800) {
            p5++;
        }
    }

    let p1Total = (p1 / n) * 100;
    let p2Total = (p2 / n) * 100;
    let p3Total = (p3 / n) * 100;
    let p4Total = (p4 / n) * 100;
    let p5Total = (p5 / n) * 100;

    console.log(`${p1Total.toFixed(2)}%`);
    console.log(`${p2Total.toFixed(2)}%`);
    console.log(`${p3Total.toFixed(2)}%`);
    console.log(`${p4Total.toFixed(2)}%`);
    console.log(`${p5Total.toFixed(2)}%`);

}
solve(["3", "1", "2", "999"]);

*/























