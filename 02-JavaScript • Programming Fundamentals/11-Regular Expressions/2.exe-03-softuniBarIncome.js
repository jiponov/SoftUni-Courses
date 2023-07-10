function softuniBarIncome(input) {          // 100/100
    'use strict'
    const text = input.join(', ');
   
    const pattern = /%(?<customer>[A-Z][a-z]+)%[^|$%.]*<(?<product>\w+)[^|$%.]*\|(?<count>\d+)\|[^|$%.]*?(?<price>\d+.?\d+)\$/g;

    let money = 0;
    let match = pattern.exec(text);

    while (match != null) {
        const customer = match.groups.customer;
        const product = match.groups.product;
        const count = Number(match.groups.count);
        const price = Number(match.groups.price);

        const totalPrice = count * price;
        money += totalPrice;

        console.log(`${customer}: ${product} - ${totalPrice.toFixed(2)}`);

        match = pattern.exec(text);
    }

    console.log(`Total income: ${money.toFixed(2)}`);
}

softuniBarIncome([
    '%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift'
]);
console.log('-------');
softuniBarIncome([
    '%InvalidName%<Croissant>|2|10.3$',
    '%Peter%<Gum>1.3$',
    '%Maria%<Cola>|1|2.4',
    '%Valid%<Valid>valid|10|valid20$',
    'end of shift'
]);


