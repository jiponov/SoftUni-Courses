function previousDay(year, month, day) {    // 100/100

    let previous = new Date(year, month, day - 1);

    if (day == 1) {
        previous = new Date(year, month - 1, day - 1)
        console.log(`${previous.getFullYear()}-${previous.getMonth() + 1}-${previous.getDate()}`);
    } else {
        console.log(`${previous.getFullYear()}-${previous.getMonth()}-${previous.getDate()}`);
    }
}

previousDay(2016, 9, 30);   // 2016-9-29
console.log('-------');
previousDay(2016, 10, 1);   // 2016-9-30

// Hint: Use Date()
