function solve(input) {

    let word = input[0];
    let all = word.length;
    let sum = 0;

    for (i = 0; i < all; i++) {
        let currentDigit = Number(word[i]);
        sum += currentDigit;
    }

    console.log(`The sum of the digits is:${sum}`);

}
solve(["1234"]);

/*

function loopsDemo(input) {

    let num = input[0];
    let numL = num.length;
    let sum = 0;

    for (let i = 0; i < numL; i++) {
        let eachSymbol = Number(num.charAt(i));
        sum += eachSymbol;
    }

    console.log(`The sum of the digits is:${sum}`);
}
loopsDemo(["1234"]);

*/