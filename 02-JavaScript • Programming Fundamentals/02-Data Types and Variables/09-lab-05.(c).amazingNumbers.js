function solve(num) {

    let result = 0;
    let numAsString = String(num);

    for (let i = 0; i < numAsString.length; i++) {
        result += Number(numAsString[i]);
    }

    let special = false;
    let resultAsString = String(result);

    for (let i = 0; i < resultAsString.length; i++) {
        if (resultAsString[i] == '9') {
            special = true;
        }
    }

    /* console.log(`${num} Amazing? ${special ? 'True' : 'False'}`); */

    if (special == false) {
        console.log(`${num} Amazing? False`)
    } else if (special == true) {
        console.log(`${num} Amazing? True`)
    }

}
solve(1233);
solve(999);
solve(7814);
solve(982);