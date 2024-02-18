function worldTour(input) {         // 100/100

    let stops = input.shift();

    while (input[0] != 'Travel') {
        let line = input.shift().split(':');

        if (line[0] == 'Add Stop') {
            let startIndex = Number(line[1]);
            let str = line[2];

            if ((startIndex >= 0) && (startIndex <= stops.length - 1)) {    // isValid startIndex?                 
                let start = stops.substring(0, startIndex);
                let end = stops.substring(startIndex);
                stops = start + str + end;

            }

            console.log(stops);

        } else if (line[0] == 'Remove Stop') {
            let startIndex = Number(line[1]);
            let endIndex = Number(line[2]);

            if ((startIndex >= 0 && startIndex <= stops.length - 1) && (endIndex >= 0 && endIndex <= stops.length - 1) && (startIndex <= endIndex)) {       // isValid startIndex/endIndex? 
                let start = stops.substring(0, startIndex);
                let remove = stops.substring(startIndex, endIndex + 1);
                let end = stops.substring(endIndex + 1);
                stops = start + end;
            }

            console.log(stops);

        } else if (line[0] == 'Switch') {
            let oldString = line[1];
            let newString = line[2];

            if (stops.includes(oldString)) {
                stops = stops.replace(oldString, newString);
                // while (stops.includes(oldString)) {
                //     stops = stops.replace(oldString, newString)
                // }
            }

            console.log(stops);
        }
    }

    console.log(`Ready for world tour! Planned stops: ${stops}`);
}

worldTour([
    "Hawai::Cyprys-Greece",
    "Add Stop:7:Rome",
    "Remove Stop:11:16",
    "Switch:Hawai:Bulgaria",
    "Travel"
]);
console.log('-----');
worldTour([
    "Albania:Bulgaria:Cyprus:Deuchland",
    "Add Stop:3:Nigeria",
    "Remove Stop:4:8",
    "Switch:Albania: Azerbaycan",
    "Travel"
]);