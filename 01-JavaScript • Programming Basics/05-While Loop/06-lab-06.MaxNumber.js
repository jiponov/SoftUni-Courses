function solve(input) {

    let index = 0;
    let data = input[index];
    let max = Number.MIN_SAFE_INTEGER;

    while (data != 'Stop') {
        let dataAsNumber = Number(data);
        if (dataAsNumber > max) {
            max = dataAsNumber;
        }
        index++;
        data = input[index];
    }
    console.log(max);
}
solve(["100",
    "99",
    "80",
    "70",
    "Stop"]);


