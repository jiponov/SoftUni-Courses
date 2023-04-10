function partyTime(inputArr) {
    let vip = [];
    let normal = [];
    let index = inputArr.indexOf("PARTY");
    let secondArr = inputArr.slice();

    for (const text of inputArr) {
        if (text === "PARTY") {
            secondArr.splice(0, index + 1);
            break;
        }
        if (text[0][0] >= 0 && text[0][0] <= 9) {
            vip.push(text);
        } else {
            normal.push(text);
        }
    }
    
    for (const guests of secondArr) {
        if (vip.includes(guests)) {
            vip.splice(vip.indexOf(guests), 1);
        } else if (normal.includes(guests)) {
            normal.splice(normal.indexOf(guests), 1);
        }
    }

    console.log(vip.length + normal.length);
    vip.forEach((guest) => console.log(guest));
    normal.forEach((guest) => console.log(guest));
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