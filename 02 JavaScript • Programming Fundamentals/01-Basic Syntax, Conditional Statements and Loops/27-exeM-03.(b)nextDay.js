function data(year, month, day) {

    let date = new Date(year, month - 1, day);
    let tomorrow = new Date(year, month - 1, date.getDate() + 1);
    console.log(`${tomorrow.getFullYear()}-${tomorrow.getMonth() + 1}-${tomorrow.getDate()}`);
}
data(2020, 3, 24)


