function dayOfWeek(day) {    // 100/100
    let result;

    switch (day) {
        case 'Monday':
            result = 1;
            break;
        case 'Tuesday':
            result = 2;
            break;
        case 'Wednesday':
            result = 3;
            break;
        case 'Thursday':
            result = 4;
            break;
        case 'Friday':
            result = 5;
            break;
        case 'Saturday':
            result = 6;
            break;
        case 'Sunday':
            result = 7;
            break;
        default:
            result = 'error';
            break;
    }

    return result;
}

dayOfWeek('Monday');
console.log('-------');
dayOfWeek('Friday');
console.log('-------');
dayOfWeek('Invalid');
console.log('-------');
dayOfWeek('January');