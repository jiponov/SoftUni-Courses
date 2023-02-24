function towns(inputArr) {

    let result = {};

    for (let el of inputArr) {
        let token = el.split(' | ');

        let town = token[0];
        let latitude = Number(token[1]);
        let longitude = Number(token[2]);

        result.town = town;
        result.latitude = latitude.toFixed(2);
        result.longitude = longitude.toFixed(2);
        console.log(result);
    }
}
towns(['Sofia | 42.696552 | 23.32601', 'Beijing | 39.913818 | 116.363625']);
console.log('---');
towns(['Plovdiv | 136.45 | 812.575']);
