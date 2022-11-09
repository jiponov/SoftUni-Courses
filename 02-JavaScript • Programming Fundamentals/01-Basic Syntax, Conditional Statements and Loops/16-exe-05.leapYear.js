function leapYear(year) {

    let flag = false;
    if (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0)) {
        flag = true;
    } else {
        flag = false;
    }

    if (flag) {
        console.log(`yes`);
    } else {
        console.log(`no`);
    }
}
leapYear(1984);
leapYear(2003);
leapYear(4);

