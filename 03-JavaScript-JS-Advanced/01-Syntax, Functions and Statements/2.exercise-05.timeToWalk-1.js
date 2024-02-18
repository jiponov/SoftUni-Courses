function timeToWalk(steps, lengthInMeters, speedKmH) {    // 100/100    

    let distanceMeters = steps * lengthInMeters;
    let speedMetersSec = speedKmH / 3.6;
    let time = distanceMeters / speedMetersSec;
    let rest = Math.floor(distanceMeters / 500);

    let timeMin = Math.floor(time / 60);
    let timeSec = Math.round(time - (timeMin * 60));
    let timeHour = Math.floor(time / 3600);

    console.log((timeHour < 10 ? "0" : "") + timeHour + ":" + (timeMin + rest < 10 ? "0" : "") + (timeMin + rest) + ":" + (timeSec < 10 ? "0" : "") + timeSec);
}

timeToWalk(4000, 0.60, 5);
console.log('-------');
timeToWalk(2564, 0.70, 5.5);


/*
let hours = Math.floor(time / 3600);
let min = Math.floor(time / 60);
let sec = time % 60;
*/
