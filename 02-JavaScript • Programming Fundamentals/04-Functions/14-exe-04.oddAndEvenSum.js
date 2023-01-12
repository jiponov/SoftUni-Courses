function oddAndEvenSum(num) {
    let even = 0;
    let odd = 0;
    let numAsString = num.toString();
    for (let i = 0; i < numAsString.length; i++) {
        if (Number(numAsString[i]) % 2 == 0) {
            even += Number(numAsString[i]);
        } else {
            odd += Number(numAsString[i]);
        }
    }
    console.log(`Odd sum = ${odd}, Even sum = ${even}`);
}

oddAndEvenSum(1000435);
oddAndEvenSum(3495892137259234);

