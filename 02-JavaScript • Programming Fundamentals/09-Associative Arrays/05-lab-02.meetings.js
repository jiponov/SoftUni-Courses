function meetings(input) {

    let weekdays = {};

    for (let line of input) {
        let token = line.split(' ');
        let day = token[0];
        let name = token[1];
        if (!weekdays.hasOwnProperty([day])) {
            weekdays[day] = name;
            console.log(`Scheduled for ${day}`);
        } else {
            console.log(`Conflict on ${day}!`)
        }
    }

    for (let key in weekdays) {
        console.log(`${key} -> ${weekdays[key]}`);
    }
}

meetings(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim']);