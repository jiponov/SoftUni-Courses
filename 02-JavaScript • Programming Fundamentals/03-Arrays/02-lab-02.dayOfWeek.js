function dayOfWeek(num) {

    let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    if (num < 1 || num > 7) {
        console.log(`Invalid day!`)
    } else {
        let index = num - 1;
        console.log(days[index]);
    }
}

dayOfWeek(3);
dayOfWeek(7);
dayOfWeek(1);
dayOfWeek(-5);
dayOfWeek(11);
