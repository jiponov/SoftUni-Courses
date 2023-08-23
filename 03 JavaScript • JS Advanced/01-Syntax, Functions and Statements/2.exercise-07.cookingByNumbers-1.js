function cookingByNumbers(num, ...list) {    // 100/100
    num = Number(num);
    let result = [];

    while (list[0] != undefined) {      // list.length > 0

        let operation = list.shift()

        if (operation == 'chop') {
            num /= 2;
            result.push(num)
        } else if (operation == 'dice') {
            num = Math.sqrt(num)
            result.push(num)
        } else if (operation == 'spice') {
            num += 1
            result.push(num)
        } else if (operation == 'bake') {
            num *= 3;
            result.push(num)
        } else if (operation == 'fillet') {
            num *= 0.80;
            result.push(num)
        }
    }

    console.log(result.join('\n'));
}

cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
console.log('-------');
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');

// result.push(num.toFixed(1))
