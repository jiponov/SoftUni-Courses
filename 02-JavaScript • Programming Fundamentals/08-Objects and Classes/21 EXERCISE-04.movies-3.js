function movies(inputArr) {

    let movies = [];

    inputArr.forEach((el) => {
        if (el.includes('addMovie ')) {
            let movie = el.replace('addMovie ', '')
            movies.push({ name: movie })
        } else if (el.includes('directedBy')) {
            movieInfo = el.split(' directedBy ');
            let name = movieInfo[0];
            let director = movieInfo[1];
            movies.forEach(movie => {
                if (movie.name === name) {
                    movie.director = director;
                }
            })
        } else if (el.includes('onDate')) {
            movieInfo = el.split(' onDate ');
            let name = movieInfo[0];
            let date = movieInfo[1];
            movies.forEach(movie => {
                if (movie.name === name) {
                    movie.date = date;
                }
            })
        }
    });
    movies.forEach(movie => {
        if (movie.name && movie.director && movie.date) {
            console.log(JSON.stringify(movie));
        }
    })
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
