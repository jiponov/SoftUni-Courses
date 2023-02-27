function movies(inputArr) {

    let moviesArr = [];     // масив с обекти

    // inputArr.forEach((el) => {      // For-Each е като For-Of Loop
    //     console.log(el);
    // })

    inputArr.forEach((el) => {

        if (el.includes('addMovie ')) {
            let movie = el.replace('addMovie ', '');
            moviesArr.push({ name: movie });
            //console.log(moviesArr)

        } else if (el.includes('directedBy')) {
            // let [name, director] = el.split(' directedBy ');   може и така вместо долните 3 реда
            let currentData = el.split(' directedBy ');
            let movieName = currentData[0];
            let movieDirector = currentData[1];
            moviesArr.forEach(element => {
                if (element.name === movieName) {
                    element.director = movieDirector;
                }
            })

        } else if (el.includes('onDate')) {
            let [movieName, movieDate] = el.split(' onDate ');
            moviesArr.forEach(element => {
                if (element.name === movieName) {
                    element.date = movieDate;
                }
            })
        }
    });
    //console.log(moviesArr)

    moviesArr.forEach(movie => {
        if (movie.name && movie.director && movie.date) {
            console.log(JSON.stringify(movie));
        }
    });
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
