function sumDigits(num) {

    let numAsString = num.toString();
    let numAsStringL = numAsString.length;
    let sum = 0;
    for (let i = 0; i < numAsStringL; i++) {
        sum += Number(numAsString[i]);
    }
    console.log(sum)
}
sumDigits(245678);
sumDigits(543);

