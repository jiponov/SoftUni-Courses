function townsToJson(input) {    // 100/100

    // don't need the first line of input
    input.shift();

    // create an array to store objects
    const result = [];

    // parse the input
    for (const line of input) {
        let token = line.split(' | ');
        let Town = token[0].replace('| ', '');
        let Latitude = Number(token[1]).toFixed(2);
        let Longitude = Number(token[2].replace(' |', '')).toFixed(2);

        Latitude = Number(Latitude);
        Longitude = Number(Longitude);

        const obj = {
            Town: Town,
            Latitude: Latitude,
            Longitude: Longitude,
        };

        result.push(obj);
    }

    // print the output
    console.log(JSON.stringify(result));
}

townsToJson([
    '| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']);

console.log('-------');
townsToJson([
    '| Town | Latitude | Longitude |',
    '| Veliko Turnovo | 43.0757 | 25.6172 |',
    '| Monatevideo | 34.50 | 56.11 |']);


