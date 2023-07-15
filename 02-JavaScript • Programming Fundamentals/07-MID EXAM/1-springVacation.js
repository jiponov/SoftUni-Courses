function springVacation(inputArr) {
    let daysVacation = Number(inputArr.shift());
    let budget = Number(inputArr.shift());
    let people = Number(inputArr.shift());
    let fuelPriceKM = Number(inputArr.shift());
    let foodExpensesPerson = Number(inputArr.shift());
    let hotelExpensesPerson = Number(inputArr.shift());
    let totalFood = daysVacation * people * foodExpensesPerson;
    let totalHotel = daysVacation * people * hotelExpensesPerson;

    if (people > 10) {
        totalHotel *= 0.75;
    }
    let FoodAndAccommodation = totalFood + totalHotel;

    let totalExpenses = 0;
    totalExpenses += FoodAndAccommodation;

    let index = 0;
    let commands = Number(inputArr[index++]);

    for (let i = 1; i <= daysVacation; i++) {
        let travelledDistKM = commands;
        let currentExp = totalExpenses + travelledDistKM * fuelPriceKM;

        if (i % 3 === 0 || i % 5 === 0) {
            currentExp *= 1.4;
        }
        if (i % 7 === 0) {
            let smallAmountPlus = currentExp / people;
            currentExp -= smallAmountPlus;
        }

        totalExpenses = currentExp;

        if (totalExpenses > budget) {
            let difference = Math.abs(totalExpenses - budget);
            console.log(`Not enough money to continue the trip. You need ${difference.toFixed(2)}$ more.`)
            return;
        }

        commands = Number(inputArr[index++]);
    }

    if (totalExpenses <= budget) {
        let difference = Math.abs(totalExpenses - budget);
        console.log(`You have reached the destination. You have ${difference.toFixed(2)}$ budget left.`)
    }
}

springVacation(["7",
    "12000",
    "5",
    "1.5",
    "10",
    "20",
    "512",
    "318",
    "202",
    "154",
    "222",
    "108",
    "123"]);
console.log('---');
springVacation(["10",
    "20500",
    "11",
    "1.2",
    "8",
    "13",
    "100",
    "150",
    "500",
    "400",
    "600",
    "130",
    "300",
    "350",
    "200",
    "300"]);