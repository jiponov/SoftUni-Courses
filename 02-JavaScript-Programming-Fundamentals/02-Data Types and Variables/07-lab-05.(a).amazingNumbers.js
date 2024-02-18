function amazingNumbers(num) {

    let numAsString = String(num);
    let output = 0;
    let numAsStringL = numAsString.length;

    for (let i = 0; i < numAsStringL; i++) {
        output += Number(numAsString[i]);
    }

    let outputAsString = String(output);
    let outputAsStringL = outputAsString.length;
    let isAmazing = false;

    for (let j = 0; j < outputAsStringL; j++) {
        if (outputAsString[j] == '9') {
            isAmazing = true;
            break;
        } else {
            isAmazing = false;
        }
    }

    if (isAmazing) {
        console.log(`${num} Amazing? True`);
    } else {
        console.log(`${num} Amazing? False`)
    }
}
amazingNumbers(1233);
amazingNumbers(999);

