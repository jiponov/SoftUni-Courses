function solve(input) {

    let age = Number(input[0]);
    let gender = input[1];

    if (gender === 'f') {

        if (age >= 16) {
            console.log('Ms.');
        }

        if (age < 16) {
            console.log("Miss");
        }


    } else if (gender === "m") {

        if (age >= 16) {
            console.log('Mr.');
        }

        if (age < 16) {
            console.log('Master');
        }

    }

}
solve(["12",
    "f"]);


/*

function solve(input) {

    let age = Number(input[0]);
    let gender = input[1];

    if (age >= 16) {
        if (gender == 'm') {
            console.log('Mr.');
        } else if (gender == 'f') {
            console.log('Ms.');
        }
    } else if (age < 16) {
        if (gender == 'm') {
            console.log('Master');
        } else if (gender == 'f') {
            console.log('Miss');
        }
    }
}
solve(["12", "f"]);

*/



