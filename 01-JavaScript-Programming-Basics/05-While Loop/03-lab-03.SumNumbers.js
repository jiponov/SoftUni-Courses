function solve(input) {

    let n = Number(input[0]);
    let sum = 0;
    let index = 1;

    let numbers = Number(input[index]);


    while (sum < n) {
        numbers = Number(input[index]);
        sum += numbers;
        index++;

    }
    console.log(sum);
}
solve(["100",
    "10",
    "20",
    "30",
    "40"]);

