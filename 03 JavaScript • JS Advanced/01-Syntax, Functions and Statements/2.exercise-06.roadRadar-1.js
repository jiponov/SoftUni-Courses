function roadRadar(speed, area) {    // 100/100

    let isAccepted = false;
    let speedLimit = 0;

    if (area == 'residential') {
        let permissible = 20;
        speedLimit = permissible;
        if (speed <= permissible) {
            isAccepted = true;
        }
    } else if (area == 'city') {
        let permissible = 50;
        speedLimit = permissible;
        if (speed <= permissible) {
            isAccepted = true;
        }
    } else if (area == 'interstate') {
        let permissible = 90;
        speedLimit = permissible;
        if (speed <= permissible) {
            isAccepted = true;
        }
    } else if (area == 'motorway') {
        let permissible = 130;
        speedLimit = permissible;
        if (speed <= permissible) {
            isAccepted = true;
        }
    }


    if (isAccepted) {
        console.log(`Driving ${speed} km/h in a ${speedLimit} zone`)
    } else {

        let diff = speed - speedLimit;
        let status;
        if (diff <= 20) {
            status = 'speeding';
        } else if (diff > 20 && diff <= 40) {
            status = 'excessive speeding';
        } else if (diff > 40) {
            status = 'reckless driving';
        }

        console.log(`The speed is ${diff} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
    }
}

roadRadar(40, 'city');
console.log('-------');
roadRadar(21, 'residential');
console.log('-------');
roadRadar(120, 'interstate');
console.log('-------');
roadRadar(200, 'motorway');