function printAndSum(a, b) {

    let sum = 0;
    let output = "";
    for (let i = a; i <= b; i++) {
        sum += i;
        output += i + " ";              //  `${i} `
    }
    console.log(output);
    console.log(`Sum: ${sum}`);
}
printAndSum(5, 10);
printAndSum(0, 26);
printAndSum(50, 60);


