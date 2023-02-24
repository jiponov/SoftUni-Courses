function towns(inputArr) {

    let currentTown = {};

    for (let data of inputArr) {

        let tokenArr = data.split(' | ');
        let strCity = tokenArr[0];
        let strLatitude = (Number(tokenArr[1]));
        let strLongitude = (Number(tokenArr[2]));
        currentTown.town = strCity;
        currentTown.latitude = strLatitude.toFixed(2);
        currentTown.longitude = strLongitude.toFixed(2);
        console.log(currentTown);
    }

}
towns(['Sofia | 42.696552 | 23.32601', 'Beijing | 39.913818 | 116.363625']);
console.log('---');
towns(['Plovdiv | 136.45 | 812.575']);