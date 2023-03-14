function meetings(inputArr) {
    // create collection
    let meetingsObj = {};

    // for every entry of input
    // -- parse
    // -- store ONLY if day is available
    for (let line of inputArr) {
        let token = line.split(' ');                        // или let [day, name] = line.split(' ');
        let day = token[0];
        let name = token[1];

        if (meetingsObj.hasOwnProperty(day)) {
            console.log(`Conflict on ${day}!`);
        } else {
            meetingsObj[day] = name;
            console.log(`Scheduled for ${day}`);
        }
    }

    // print result object
    for (let keyDay in meetingsObj) {
        console.log(keyDay, '->', meetingsObj[keyDay]);
    }
}

meetings(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim']);