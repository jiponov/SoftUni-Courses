function circleArea(input) {    // 100/100

    if (typeof input == 'number') {
        let area = input ** 2 * Math.PI;        // let area = Math.pow(input, 2) * Math.PI;
        console.log(area.toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${typeof input}.`)
    }
}

circleArea(5);
console.log('-------');
circleArea('name');
circleArea([1, 2, 3]);
circleArea({ name: 'Georgi' });
circleArea(true);