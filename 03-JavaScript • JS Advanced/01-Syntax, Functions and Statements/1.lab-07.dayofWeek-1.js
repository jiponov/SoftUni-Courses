function dayOfWeek(input) {    // 100/100

    let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    for (let i = 1; i <= days.length; i++) {

        if (days[i - 1] == input) {
            console.log(i);
        }
    }

    if (!days.includes(input)) {
        console.log(`error`);
    }
}

dayOfWeek('Monday');
console.log('-------');
dayOfWeek('Friday');
console.log('-------');
dayOfWeek('Invalid');
console.log('-------');
dayOfWeek('January');