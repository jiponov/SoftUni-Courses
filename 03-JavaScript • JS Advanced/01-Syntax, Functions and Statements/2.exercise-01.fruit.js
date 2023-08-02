function fruit(fruit, weightInGrams, pricePerKg) {    // 100/100

    let weightInKg = weightInGrams / 1000;
    let money = weightInKg * pricePerKg;
    console.log(`I need $${money.toFixed(2)} to buy ${weightInKg.toFixed(2)} kilograms ${fruit}.`)
}

fruit('orange', 2500, 1.80);
console.log('-------');
fruit('apple', 1563, 2.35);