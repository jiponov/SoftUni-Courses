function calorieObject(arr) {    // 100/100

    let result = {};

    for (let i = 0; i < arr.length; i += 2) {
        let product = arr[i];
        let calories = arr[i + 1];
        result[product] = Number(calories);
    }

    console.log(result)
}

calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
console.log('-------');
calorieObject(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']);