function solve(input) {

    let city = input[0];
    let sales = Number(input[1]);

    let commission = 0;

    if (city === 'Sofia') {
        if (sales >= 0 && sales <= 500) {
            commission = sales * 0.05;
        } else if (sales > 500 && sales <= 1000) {
            commission = sales * 0.07;
        } else if (sales > 1000 && sales <= 10000) {
            commission = sales * 0.08;
        } else if (sales > 10000) {
            commission = sales * 0.12;
        } else {
            console.log('error');
        }

    } else if (city === 'Varna') {
        if (sales >= 0 && sales <= 500) {
            commission = sales * 0.045;
        } else if (sales > 500 && sales <= 1000) {
            commission = sales * 0.075;
        } else if (sales > 1000 && sales <= 10000) {
            commission = sales * 0.10;
        } else if (sales > 10000) {
            commission = sales * 0.13;
        } else {
            console.log('error');
        }

    } else if (city === 'Plovdiv') {
        if (sales >= 0 && sales <= 500) {
            commission = sales * 0.055;
        } else if (sales > 500 && sales <= 1000) {
            commission = sales * 0.08;
        } else if (sales > 1000 && sales <= 10000) {
            commission = sales * 0.12;
        } else if (sales > 10000) {
            commission = sales * 0.145;
        } else {
            console.log('error');
        }

    } else {
        console.log('error');
    }


    if (commission > 0) {
        console.log(commission.toFixed(2));
    }
}
solve(["Sofia", "1500"]);

/*
function solve(input) {

    let town = input[0];
    let sales = Number(input[1]);
    let price = 0;

    if (town == 'Sofia') {
        if (sales >= 0 && sales <= 500) {
            price = sales * 0.05;
        } else if (sales > 500 && sales <= 1000) {
            price = sales * 0.07;
        } else if (sales > 1000 && sales <= 10000) {
            price = sales * 0.08;
        } else if (sales > 10000) {
            price = sales * 0.12;
        } else {
            console.log('error')
        }
    } else if (town == 'Varna') {
        if (sales >= 0 && sales <= 500) {
            price = sales * 0.045;
        } else if (sales > 500 && sales <= 1000) {
            price = sales * 0.075;
        } else if (sales > 1000 && sales <= 10000) {
            price = sales * 0.10;
        } else if (sales > 10000) {
            price = sales * 0.13;
        } else {
            console.log('error')
        }
    } else if (town == 'Plovdiv') {
        if (sales >= 0 && sales <= 500) {
            price = sales * 0.055;
        } else if (sales > 500 && sales <= 1000) {
            price = sales * 0.08;
        } else if (sales > 1000 && sales <= 10000) {
            price = sales * 0.12;
        } else if (sales > 10000) {
            price = sales * 0.145;
        } else {
            console.log('error')
        }
    } else {
        console.log('error')
    }

    if (price > 0) {
        console.log(price.toFixed(2));

    }
}
solve(["Sofia", "1500"]);
*/










