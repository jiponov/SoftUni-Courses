function solve(input) {

    let hourExam = Number(input[0]);
    let minExam = Number(input[1]);
    let hourArrival = Number(input[2]);
    let minArrival = Number(input[3]);

    let time;

    let totalMinExam = (hourExam * 60) + minExam;
    let totalMinArrival = (hourArrival * 60) + minArrival;
    let diff = totalMinExam - totalMinArrival;

    if (diff >= 0 && diff <= 30) {
        time = 'On time';
    } else if (diff > 30) {
        time = 'Early';
    } else {
        time = 'Late';
    }

    console.log(`${time}`);

    if (diff > 1 && diff <= 59) {
        console.log(`${diff} minutes before the start`)

    } else if (diff > 59) {
        if (diff >= 60 && diff <= 69) {
            let hour = Math.floor(diff / 60);
            let min = diff % 60;
            console.log(`${hour}:0${min} hours before the start`);
        } else if (diff > 69) {
            let hour = Math.floor(diff / 60);
            let min = diff % 60;
            console.log(`${hour}:${min} hours before the start`);
        }

    } else if (diff <= -1 && diff >= -59) {
        let temp = Math.abs(diff);
        console.log(`${temp} minutes after the start`);
        
    } else if (diff < -59) {
        let temp = Math.abs(diff);
        if (temp >= 60 && temp <= 69) {
            let hour = Math.floor(temp / 60);
            let min = temp % 60;
            console.log(`${hour}:0${min} hours after the start`);
        } else if (temp > 69) {
            let hour = Math.floor(temp / 60);
            let min = temp % 60;
            console.log(`${hour}:${min} hours after the start`);
        }
    }

}
solve(["9", "00", "10", "30"]);

// това решение ми дава 87 точки в judge, Нещо не е окей съвсем!