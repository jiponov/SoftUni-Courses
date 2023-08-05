function cookingByNumbers(num, ...list) {    // 100/100

    num = Number(num);

    const operations = {
        chop: (num) => num / 2,
        dice: (num) => Math.sqrt(num),
        spice: (num) => num + 1,
        bake: (num) => num * 3,
        fillet: (num) => num - num * 0.2
    };

    for (let i = 0; i < list.length; i++) {
        num = operations[list[i]](num);
        console.log(num);
    }
}

cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
console.log('-------');
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');


