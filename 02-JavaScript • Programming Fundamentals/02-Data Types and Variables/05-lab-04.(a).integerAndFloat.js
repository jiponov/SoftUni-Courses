function integerAndFloat(num1, num2, num3) {

    let sum = num1 + num2 + num3;
    let sumAsString = String(sum);
    let output = "";
    let mark;
    let isMark = false;
    for (let i = 0; i < sumAsString.length; i++) {
        if (sumAsString[i] == '.') {
            output += sumAsString[i];
            isMark = true;
            break;
        } else {
            output += sumAsString[i];
            isMark = false;
        }
    }
    if (isMark) {
        mark = 'Float';
        console.log(`${sum} - ${mark}`);
    } else {
        mark = 'Integer';
        console.log(`${sum} - ${mark}`);
    }
}
integerAndFloat(9, 100, 1.1);
integerAndFloat(100, 200, 303);
