function townsToJson(input) {    // 100/100

    let headings = input.shift();
    let result = [];
    let obj = {};

    input.forEach(town => {
        let [...towns] = town
            .split('|')
            .map(town => town.trim())
            .filter(x => x);
        towns[1] = Number(towns[1]);
        towns[2] = Number(towns[2]);

        obj = {
            Town: towns[0],
            Latitude: Number(towns[1].toFixed(2)),
            Longitude: Number(towns[2].toFixed(2))
        }

        result.push(obj)
    });

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


