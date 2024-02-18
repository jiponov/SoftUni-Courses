function vacation(people, type, day) {
    let price = 0;

    if (type == 'Students') {
        if (day == 'Friday') {
            price += 8.45;
        } else if (day == 'Saturday') {
            price += 9.8;
        } else if (day == 'Sunday') {
            price += 10.46;
        }
    } else if (type == 'Business') {
        if (day == 'Friday') {
            price += 10.90;
        } else if (day == 'Saturday') {
            price += 15.60;
        } else if (day == 'Sunday') {
            price += 16;
        }
    } else if (type == 'Regular') {
        if (day == 'Friday') {
            price += 15;
        } else if (day == 'Saturday') {
            price += 20;
        } else if (day == 'Sunday') {
            price += 22.5;
        }
    }

    let total = price * people;

    if (people >= 30 && type == 'Students') {
        total *= 0.85;
    } else if (people >= 100 && type == 'Business') {
        total = price * (people - 10);                  // total -= price * 10;
    } else if (people >= 10 && people <= 20 && type == 'Regular') {
        total *= 0.95;
    }

    console.log(`Total price: ${total.toFixed(2)}`)
}
vacation(30, "Students", "Sunday");
vacation(40, "Regular", "Saturday");