function digitsWithWords(digitAsString) {

    let digit;
    if (digitAsString == 'zero') {
        digit = 0;
    } else if (digitAsString == 'one') {
        digit = 1;
    } else if (digitAsString == 'two') {
        digit = 2;
    } else if (digitAsString == 'three') {
        digit = 3;
    } else if (digitAsString == 'four') {
        digit = 4;
    } else if (digitAsString == 'five') {
        digit = 5;
    } else if (digitAsString == 'six') {
        digit = 6;
    } else if (digitAsString == 'seven') {
        digit = 7;
    } else if (digitAsString == 'eight') {
        digit = 8;
    } else if (digitAsString == 'nine') {
        digit = 9;
    }
    console.log(digit);

}
digitsWithWords('nine');
digitsWithWords('two');
digitsWithWords('zero');