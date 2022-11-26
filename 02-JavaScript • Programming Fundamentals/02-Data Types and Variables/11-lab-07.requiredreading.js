function requiredreading(pages, pagesPerOneHour, days) {

    let totalTime = pages / pagesPerOneHour;
    let requiredHoursPerDay = totalTime / days;
    console.log(requiredHoursPerDay);
}
requiredreading(212, 20, 2);
requiredreading(432, 15, 4);

