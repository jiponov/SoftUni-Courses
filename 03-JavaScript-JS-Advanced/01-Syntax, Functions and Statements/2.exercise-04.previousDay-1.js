function previousDay(year, month, day) {    // 100/100

    const date = new Date(year, month - 1, day);
    date.setDate(date.getDate() - 1);

    console.log(`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`);
}

previousDay(2016, 9, 30);   // 2016-9-29
console.log('-------');
previousDay(2016, 10, 1);   // 2016-9-30

// Hint: Use Date()
