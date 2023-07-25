function fancyBarcodes(input) {          // 100/100
    'use strict'

    let n = Number(input.shift());
    let pattern = /@#+(?<code>[A-Z][A-Za-z0-9]{4,}[A-Z])@#+/;

    for (let i = 0; i < n; i++) {
        let line = input[i];
        let match = pattern.exec(line);

        let productGroup = "";
        let countDigits = 0;

        if (match == null) {
            console.log(`Invalid barcode`);

        } else {
            let code = match.groups.code;    // let code = match[1];

            for (let char of code) {
                if (char.charCodeAt() >= 48 && char.charCodeAt() <= 57) {
                    productGroup += char;
                    countDigits++;
                }
            }

            if (productGroup.length === 0) {
                productGroup = '00';
            }

            console.log(`Product group: ${productGroup}`);
        }
    }
}

fancyBarcodes([
    "3",
    "@#FreshFisH@#",
    "@###Brea0D@###",
    "@##Che4s6E@##"
]);
console.log('-------');
fancyBarcodes([
    "6",
    "@###Val1d1teM@###",
    "@#ValidIteM@#",
    "##InvaliDiteM##",
    "@InvalidIteM@",
    "@#Invalid_IteM@#",
    "@#ValiditeM@#"
]);
console.log('-------');
fancyBarcodes([
    "4",
    "@#FreshFisHa@#",
    "@#FreshFisH@#",
    "@###Brea0D@###",
    "@##Che4s6E@##"
]);