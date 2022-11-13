function englishNameOfTheLastDigit(a) {

    let aAsString = String(a);
    let aL = aAsString.length;
    let finalLetter = aAsString[aL - 1];
    let mark = "";
    if (finalLetter == 0) {
        mark += 'zero';
    } else if (finalLetter == 1) {
        mark += 'one';
    } else if (finalLetter == 2) {
        mark += 'two';
    } else if (finalLetter == 3) {
        mark += 'three';
    } else if (finalLetter == 4) {
        mark += 'four';
    } else if (finalLetter == 5) {
        mark += 'five';
    } else if (finalLetter == 6) {
        mark += 'six';
    } else if (finalLetter == 7) {
        mark += 'seven';
    } else if (finalLetter == 8) {
        mark += 'eight';
    } else if (finalLetter == 9) {
        mark += 'nine';
    }

    console.log(mark);
}
englishNameOfTheLastDigit(512);
englishNameOfTheLastDigit(1643);
englishNameOfTheLastDigit(0);
englishNameOfTheLastDigit(1);

