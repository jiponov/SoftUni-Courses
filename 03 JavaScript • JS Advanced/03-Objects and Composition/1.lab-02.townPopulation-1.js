function townPopulation(input) {    // 100/100

    const result = {}

    // iterate input
    // parse each element
    // store result
    for (let el of input) {
        let [city, population] = el.split(' <-> ');
        population = Number(population);
        if (!result.hasOwnProperty(city)) {
            result[city] = population;
        } else {
            result[city] += population;
        }
    }

    // print result
    for (let el in result) {
        console.log(`${el} : ${result[el]}`);
    }
}

townPopulation([
    'Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000'
]);
console.log('-------');
townPopulation([
    'Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000'
]);