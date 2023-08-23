function literatura(input) {
    let countPages = Number(input[0]);
    let pagesPerHour = Number(input[1]);
    let daysPerBook = Number(input[2]);
    let totalReadBook = countPages / pagesPerHour;
    let totalHoursPerDay = totalReadBook / daysPerBook;
    console.log(totalHoursPerDay);
}

literatura(["212",
    "20",
    "2"]);