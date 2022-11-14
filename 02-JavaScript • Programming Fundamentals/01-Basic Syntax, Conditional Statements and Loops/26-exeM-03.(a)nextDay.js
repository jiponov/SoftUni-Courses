function data(year, m, day) {
    day++
    if (day > 30) {
        m++
        day = 1
        if (m > 12) {
            m = 1

        }
    }
    if (year < 2) {
        year = 1900
        year++
    }
    for (i = 0; i <= year; i += 4) {
        if (year === i) {
            if (m === 2) {
                if (day > 29) {
                    m++
                    day = 1
                    break;
                }

            }
        }
    }

    console.log(`${year}-${m}-${day}`);
}
data(2020, 3, 24)

