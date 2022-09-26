function solve(input) {

    let hoursExam = Number(input[0]);
    let minExam = Number(input[1]);
    let hoursArrive = Number(input[2]);
    let minArrive = Number(input[3]);

    let examTime = hoursExam * 60 + minExam;
    let arriveTime = hoursArrive * 60 + minArrive;

    diff = Math.abs(examTime - arriveTime);


    if (examTime < arriveTime) {
        console.log('Late');
        let h = Math.floor(diff / 60);
        let m = diff % 60;
        if (h >= 1) {
            if (m < 10) {
                console.log(`${h}:0${m} hours after the start`);
            } else {
                console.log(`${h}:${m} hours after the start`);
            }
        } else {
            console.log(`${m} minutes after the start`)
        }


    } else if (examTime === arriveTime || examTime - arriveTime <= 30) {
        console.log('On time');
        if (diff !== 0) {
            let m = diff % 60;
            console.log(`${m} minutes before the start`)
        }


    } else {
        console.log('Early');
        let h = Math.floor(diff / 60);
        let m = diff % 60;
        if (h >= 1) {
            if (m < 10) {
                console.log(`${h}:0${m} hours before the start`);
            } else {
                console.log(`${h}:${m} hours before the start`)
            }
        } else {
            console.log(`${m} minutes before the start`)
        }


    }
}
solve(["9",
    "30",
    "9",
    "50"]);