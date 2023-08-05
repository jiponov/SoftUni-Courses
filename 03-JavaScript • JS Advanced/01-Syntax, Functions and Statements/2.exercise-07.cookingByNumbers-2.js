function cookingByNumbers(num, ...list) {    // 100/100
    num = Number(num);
    for (let i = 0; i < 5; i++) {
        let command = list[i];

        if (command == "chop") {
            num /= 2;
        } else if (command == "dice") {
            num = Math.sqrt(num);
        } else if (command == "spice") {
            num++;
        } else if (command == "bake") {
            num *= 3;
        } else if (command == "fillet") {
            num -= num * 0.2;
        }

        console.log(num);
    }
}

cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
console.log('-------');
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');


