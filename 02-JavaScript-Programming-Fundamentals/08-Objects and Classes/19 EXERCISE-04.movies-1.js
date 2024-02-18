function movies(inputArr) {
    let result = {}
    for (let el of inputArr) {
        let moviesObj = {};

        if (el.includes('addMovie')) {
            let name = el.replace('addMovie ', "");             // ""  REPLACE with NOTHING
            moviesObj.name = name

            for (let search of inputArr) {
                if (search.includes(`${name} directedBy`)) {
                    let director = search.replace(`${name} directedBy `, "");
                    moviesObj.director = director;
                } else if (search.includes(`${name} onDate`)) {
                    let date = search.replace(`${name} onDate `, "");
                    moviesObj.date = date;
                }
            }
            //console.log(moviesObj)                  
        }

        if (Object.keys(moviesObj).length === 3) {              // Object.keys(obj).length   >   ==   !!!
            console.log(JSON.stringify(moviesObj));
        }
    }

}
movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
]);

console.log('---');

movies([
    'addMovie The Avengers',
    'addMovie Superman',
    'The Avengers directedBy Anthony Russo',
    'The Avengers onDate 30.07.2010',
    'Captain America onDate 30.07.2010',
    'Captain America directedBy Joe Russo'
]);
