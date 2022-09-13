function solve(input) {
    let animal = input[0];
    switch (animal) {
        case "dog": console.log('mammal'); break;
        case "crocodile":
        case "tortoise":
        case "snake": console.log('reptile'); break;
        default: console.log('unknown'); break;
    }
}
solve(["cat"]);

/*

function solve(input) {

    let animal = input[0];

    if (animal == 'dog') {
        console.log('mammal');
    } else if (animal == 'crocodile' || animal == 'tortoise' || animal == 'snake') {
        console.log('reptile');
    } else {
        console.log('unknown');
    }
}
solve(["dog"]);

*/