function solve(input) {

    let hour = Number(input[0]);
    let day = input[1];

    if (hour >= 10 && hour <= 18) {
        switch (day) {
            case 'Monday':
            case 'Tuesday':
            case 'Wednesday':
            case 'Thursday':
            case 'Friday':
            case 'Saturday': console.log('open'); break;
            case 'Sunday': console.log('closed'); break;
        }
    } else {
        console.log('closed')
    }

}
solve(["11",
    "Monday"]);

/*

function solve(input) {

    let hour = Number(input[0]);
    let day = input[1];

    if (day == 'Monday' || day == 'Tuesday' || day == 'Wednesday' || day == 'Thursday' || day == 'Friday' || day == 'Saturday') {
        if (hour >= 10 && hour <= 18) {
            console.log('open')
        } else {
            console.log('closed');
        }
    } else {
        console.log('closed');
    }
}
solve(["19", "Friday"]);

*/



