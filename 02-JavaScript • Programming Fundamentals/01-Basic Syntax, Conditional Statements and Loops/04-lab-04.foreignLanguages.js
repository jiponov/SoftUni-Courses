function foreignLanguages(country) {

    if (country == 'USA' || country == 'England') {
        console.log(`English`);
    } else if (country == 'Spain' || country == 'Argentina' || country == 'Mexico') {
        console.log(`Spanish`);
    } else {
        console.log(`unknown`);
    }
}
foreignLanguages('USA');
foreignLanguages('Germany');

// HINT: Think about how you can merge multiple cases, to avoid writing more code than you need to.