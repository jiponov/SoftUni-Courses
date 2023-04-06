function piccolo(inputArr) {

    let parkingLot = {}

    for (let car of inputArr) {
        let token = car.split(', ');
        let direction = token[0];
        let carNumber = token[1];
        if (direction == 'IN') {
            if (!parkingLot.hasOwnProperty(carNumber)) {
                parkingLot[carNumber] = direction;
            }
        } else if (direction == 'OUT') {
            delete parkingLot[carNumber];
        }
    }

    if (Object.keys(parkingLot).length === 0) {
        console.log(`Parking Lot is Empty`);
    } else {
        let sortedArr = Object
            .keys(parkingLot)
            .sort((a, b) => a.localeCompare(b))
            .map(el => console.log(el))
    }
}
piccolo([
    'IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU'
]);
console.log('---');
piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'OUT, CA1234TA']);
