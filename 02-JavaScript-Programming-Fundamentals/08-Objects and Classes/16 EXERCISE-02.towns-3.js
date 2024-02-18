function towns(inputArr) {

    for (let str of inputArr) {
        let myObj = {};
        let token = str.split(' | ');
        let strCity = token[0];
        let strLatitude = (Number(token[1])).toFixed(2);
        let strLongitude = (Number(token[2])).toFixed(2);
        myObj.town = strCity;
        myObj.latitude = strLatitude;
        myObj.longitude = strLongitude;
        console.log(myObj);
    }

}
towns(['Sofia | 42.696552 | 23.32601', 'Beijing | 39.913818 | 116.363625']);
console.log('---');
towns(['Plovdiv | 136.45 | 812.575']);