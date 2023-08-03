function previousDay(y, m, d) {    // 100/100

    let date = new Date(y, m - 1, d);
    date.setDate(date.getDate() - 1);

    let newYear = date.getFullYear();
    let newMonth = date.getMonth() + 1;
    let newDate = date.getDate();

    console.log(`${newYear}-${newMonth}-${newDate}`);
}

previousDay(2016, 9, 30);   // 2016-9-29
console.log('-------');
previousDay(2016, 10, 1);   // 2016-9-30

// Hint: Use Date()
