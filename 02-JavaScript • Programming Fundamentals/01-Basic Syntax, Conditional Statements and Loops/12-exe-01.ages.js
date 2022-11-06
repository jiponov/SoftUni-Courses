function ages(age) {

    if (age >= 0 && age < 3) {
        console.log(`baby`);
    } else if (age >= 3 && age < 14) {
        console.log(`child`);
    } else if (age >= 14 && age < 20) {
        console.log(`teenager`);
    } else if (age >= 19 && age < 66) {
        console.log(`adult`);
    } else if (age >= 66) {
        console.log(`elder`);
    } else {
        console.log(`out of bounds`)
    }
}
ages(20);
ages(1);
ages(100);
ages(-1);