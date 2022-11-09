function triangleOfNumbers(n) {

    for (let i = 1; i <= n; i++) {
        let output = "";

        for (let j = 1; j <= i; j++) {
            output += `${i} `
        }
        console.log(output);
    }
}
triangleOfNumbers(3);
triangleOfNumbers(console.log(`-----------------`));
triangleOfNumbers(8);
