function amazingNumbers(num) {

    let numAsString = String(num);
    let output = 0;
    let numAsStringL = numAsString.length;

    for (let i = 0; i < numAsStringL; i++) {
        output += Number(numAsString[i]);
    }

    let outputAsString = output.toString().includes('9');           // .includes()

    if (outputAsString) {
        console.log(`${num} Amazing? True`);
    } else {
        console.log(`${num} Amazing? False`)
    }
}
amazingNumbers(1233);
amazingNumbers(999);