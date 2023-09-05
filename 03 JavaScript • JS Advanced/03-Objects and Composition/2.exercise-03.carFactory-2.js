function carFactory(input) {    // 100/100
    let cars = {};

    let engine = {};
    let carriage = {};

    if (input.power <= 90) {
        engine.power = 90;
        engine.volume = 1800;
    } else if (input.power <= 120) {
        engine.power = 120;
        engine.volume = 2400;
    } else {
        engine.power = 200;
        engine.volume = 3500;
    }

    if (input.wheelsize % 2 == 0) {
        input.wheelsize -= 1;
    }

    const wheels = new Array(4).fill(input.wheelsize)

    cars.model = input.model;
    carriage.type = input.carriage;
    carriage.color = input.color;
    cars.engine = engine;
    cars.carriage = carriage;
    cars.wheels = wheels;

    return cars;
}

console.log(carFactory({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}));
console.log('-------');
console.log(carFactory({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
}));