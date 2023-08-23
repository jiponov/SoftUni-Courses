function loopsDemo(input) {

    let n = Number(input[0]);

    for (let i = 0; i <= n; i = i + 2) {
        let result = Math.pow(2, i)
        console.log(result);
    }
}
loopsDemo(["softuni"]);