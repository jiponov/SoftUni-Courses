function solve(input) {

    let number = input;

    const rowGenerator = (num) => {
        let output = `${num} `.repeat(num);
        return output;
    };

    for (let i = 1; i <= number; i++) {
        console.log(rowGenerator(number));
    }
}

solve(3);
solve(7);