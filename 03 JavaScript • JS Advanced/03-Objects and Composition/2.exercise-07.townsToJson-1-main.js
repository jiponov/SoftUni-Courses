function townsToJson(input) {    // 100/100

    const headings = input.shift().split('|').filter(x => x).map(x => x.trim());
    //console.log(headings)

    const result = [];

    for (let i = 0; i < input.length; i++) {
        const info = input[i];
        //console.log(info)

        let [town, latitude, longitude] = info
            .split('|')
            .filter(x => x)
            .map(x => x.trim());

        latitude = Number(latitude).toFixed(2);
        longitude = Number(longitude).toFixed(2);

        result.push(factory(town, latitude, longitude));
    }
    //console.log(result)
    console.log(JSON.stringify(result));

    function factory(town, latitude, longitude) {
        return {
            Town: town,
            Latitude: Number(latitude),
            Longitude: Number(longitude)
        }
    }
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


