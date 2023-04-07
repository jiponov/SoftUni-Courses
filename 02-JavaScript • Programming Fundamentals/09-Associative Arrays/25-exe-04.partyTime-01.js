function partyTime(inputArr) {

    let vipArr = [];
    let regularArr = [];

    for (let el of inputArr) {
        if (el == 'PARTY') {
            break;
        }
        let token = el.split('')
        //console.log(token)
        let target = token[0];
        if (!isNaN(target)) {
            vipArr.push(el);
        } else {
            regularArr.push(el);
        }
    }
    //console.log(regularArr)

    let startingIndex = inputArr.indexOf('PARTY') + 1;          // елемента след PARTY взимаме
    for (let i = startingIndex; i < inputArr.length; i++) {
        let currentGuest = inputArr[i];
        if (vipArr.includes(currentGuest)) {
            let index = vipArr.indexOf(currentGuest);
            vipArr.splice(index, 1) //трием госта от VIP Листа при Match
        } else if (regularArr.includes(currentGuest)) {
            let index = regularArr.indexOf(currentGuest);
            regularArr.splice(index, 1);
        }
    }

    console.log(vipArr.length + regularArr.length);

    vipArr.forEach(el => console.log(el));
    regularArr.forEach(el => console.log(el));
}
partyTime([
    '7IK9Yo0h',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc'
]);
