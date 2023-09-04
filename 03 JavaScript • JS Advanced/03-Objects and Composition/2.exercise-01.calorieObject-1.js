function calorieObject(arr) {    // 100/100

    let result = {};

    for (let i = 0; i < arr.length; i++) {
        let current = arr[i];
        if (i % 2 == 0) {
            result[current] = Number(arr[i + 1]);
        }
    }

    console.log(result)
}

calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
console.log('-------');
calorieObject(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']);