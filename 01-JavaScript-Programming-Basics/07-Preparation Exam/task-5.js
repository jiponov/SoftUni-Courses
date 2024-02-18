function solve(input) {

    let startingPoints = 301;
    let successfulShots = 0;
    let unsuccessfulShots = 0;

    let index = 0;
    let name = input[index];
    index++;
    let type = input[index];
    index++;
    let points = input[index];


    while (startingPoints > 0) {
        let pointsNum = Number(points);

        if (type === 'Retire') {
            break;
        }

        if (type === 'Double') {
            pointsNum *= 2;
        }
        if (type === 'Triple') {
            pointsNum *= 3;
        }

        if (pointsNum <= startingPoints) {
            successfulShots++;
            startingPoints -= pointsNum;
        } else {
            unsuccessfulShots++;
        }

        index++;
        type = input[index];
        index++;
        points = input[index];
    }


    if (type === 'Retire') {
        console.log(`${name} retired after ${unsuccessfulShots}`)
    } else {
        console.log(`${name} won the leg with ${successfulShots}`)
    }
}

solve(['Michael van Gerwen',
    'Triple',
    '20',
    'Triple',
    '19',
    'Double',
    '10',
    'Single',
    '3',
    'Single',
    '1',
    'Triple',
    '20',
    'Triple',
    '20',
    'Double',
    '20'])
