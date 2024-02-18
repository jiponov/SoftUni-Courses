function carFactory(input) {    // 100/100

    let car = {};

    let engine = {};
    let carriage = {};

    car.model = input.model;

    if (input.power <= 90) {
        engine.power = 90;
        engine.volume = 1800;
    } else if (input.power <= 120) {
        engine.power = 120;
        engine.volume = 2400;
    } else if (input.power <= 200) {
        engine.power = 200;
        engine.volume = 3500;
    }

    carriage.type = input.carriage;
    carriage.color = input.color;

    //console.log(engine);
    //console.log(carriage);

    if (input.wheelsize % 2 == 0) {
        input.wheelsize--;
    }

    car.engine = engine;
    car.carriage = carriage;
    car.wheels = [input.wheelsize, input.wheelsize, input.wheelsize, input.wheelsize];

    return car;
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