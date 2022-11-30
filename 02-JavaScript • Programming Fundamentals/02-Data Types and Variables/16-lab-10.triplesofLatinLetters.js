function solve(n) {
    n = Number(n);
    for (let i = 0; i < n; i++) {
        let first = String.fromCharCode(97 + i);
        for (let j = 0; j < n; j++) {
            let second = String.fromCharCode(97 + j);
            for (let k = 0; k < n; k++) {
                let third = String.fromCharCode(97 + k);
                let output = first + second + third;
                console.log(output);
            }
        }
    }
}
solve("3");