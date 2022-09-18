function solve(input) {

    let type = input[0];
    let rows = Number(input[1]);
    let columns = Number(input[2]);

    let price = 0;
    let hall = rows * columns;

    if (type === 'Premiere') {
        price = hall * 12.00;
    } else if (type === 'Normal') {
        price = hall * 7.50;
    } else if (type === 'Discount') {
        price = hall * 5.00;
    }
    console.log(`${price.toFixed(2)} leva`);

}
solve(["Premiere",
    "10",
    "12"]);


/*

function solve(input) {

    let type = input[0];
    let rows = Number(input[1]);
    let columns = Number(input[2]);
    let sum = 0;

    let total = rows * columns;

    if (type == 'Premiere') {
        sum = total * 12.00;
    } else if (type == 'Normal') {
        sum = total * 7.50;
    } else if (type == 'Discount') {
        sum = total * 5.00;
    }

    console.log(`${sum.toFixed(2)} leva`)
}
solve(["Premiere", "10", "12"]);

*/



