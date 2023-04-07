function partyTime(input) {

    let arrOfVIP = [];
    let arrOfRegular = [];

    for (let element of input) {
        if (element === 'PARTY') {
            break;
        }
        let arrOfElement = element.slice().split('');
        let firstChar = Number(arrOfElement.shift());

        if (!isNaN(firstChar)) {
            arrOfVIP.push(element);
        } else {
            arrOfRegular.push(element);
        }
    }

    let startingIndex = input.indexOf('PARTY') + 1;

    for (let i = startingIndex; i < input.length; i++) {
        let currentGuest = input[i];
        if (arrOfVIP.includes(currentGuest)) {
            let index = arrOfVIP.indexOf(currentGuest);
            arrOfVIP.splice(index, 1);
        } else if (arrOfRegular.includes(currentGuest)) {

            let index = arrOfRegular.indexOf(currentGuest);
            arrOfRegular.splice(index, 1);
        }
    }

    console.log(arrOfVIP.length + arrOfRegular.length);

    arrOfVIP.forEach(element => console.log(element));
    arrOfRegular.forEach(element => console.log(element))

}
partyTime(['7IK9Yo0h',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc'
]);
