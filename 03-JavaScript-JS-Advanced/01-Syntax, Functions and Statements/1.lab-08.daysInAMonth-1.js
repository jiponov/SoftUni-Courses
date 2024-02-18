function daysInAMonth(month, year) {    // 100/100

    const days = new Date(year, month, 0).getDate();
    return days;
}

daysInAMonth(1, 2012);  // 31
console.log('-------');
daysInAMonth(2, 2021);  // 28

// Hint: Use Date()