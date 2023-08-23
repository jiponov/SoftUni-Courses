function furniture(input) {     // 100/100    
    'use strict'
    const text = input.join(', ');
    const pattern = />>(?<furniture>[A-Z][A-Za-z]+)<<(?<price>[\d.]+)!(?<quantity>\d+)/g;

    const furnitureList = [];
    let spendMoney = 0;
    let match = pattern.exec(text);
    console.log(match)
    while (match != null) {

        const name = match.groups.furniture;
        const price = Number(match.groups.price);
        const quantity = Number(match.groups.quantity);

        furnitureList.push(name);
        spendMoney += price * quantity;

        match = pattern.exec(text);
    }

    console.log('Bought furniture:');
    furnitureList.forEach(el => console.log(el));
    console.log(`Total money spend: ${spendMoney.toFixed(2)}`);
}

furniture([
    '>>Sofa<<312.23!3',
    '>>TV<<300!5',
    '>Invalid<<!5',
    'Purchase'
]);
console.log('-------');
furniture([
    '>> Laptop << 312.2323!3',
    '>>TV<<300.21314!5',
    '>Invalid<<!5',
    '>>TV<<300.21314!20',
    '>>Invalid<!5',
    '>>TV<<30.21314!5',
    '>>Invalid<<!!5',
    'Purchase'
]);
