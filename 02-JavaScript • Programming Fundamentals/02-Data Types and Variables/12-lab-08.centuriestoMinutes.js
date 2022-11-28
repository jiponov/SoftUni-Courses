function centuriesToMinutes(century) {

    let oneYearInDays = 365.2422;

    let years = century * 100;
    let days = Math.floor(years * oneYearInDays);
    let hours = days * 24;
    let minutes = hours * 60;
    console.log(`${century} centuries = ${years} years = ${days} days = ${hours} hours = ${minutes} minutes`)
}
centuriesToMinutes(1);
centuriesToMinutes(5);
