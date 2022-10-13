function solve(input) {

    let index = 0;
    let data = input[index];
    let min = Number.MAX_SAFE_INTEGER;

    while (data != 'Stop') {
        let dataAsNumber = Number(data);
        if (dataAsNumber < min) {
            min = dataAsNumber;
        }
        index++;
        data = input[index];
    }

    console.log(min)
}
solve(["45",
    "-20",
    "7",
    "99",
    "Stop"]);


