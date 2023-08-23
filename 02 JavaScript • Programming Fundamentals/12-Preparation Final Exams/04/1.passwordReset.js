function passwordReset(input) {          // 100/100

    let text = input.shift();

    let actions = {
        'TakeOdd': Takeodd,
        'Cut': Cut,
        'Substitute': Substitute,
    }

    while (input[0] != undefined) {
        let line = input.shift().split(' ');
        if (line == 'Done') {
            break;
        }

        let operation = line[0];
        text = actions[operation](text, line[1], line[2]);
    }

    console.log(`Your password is: ${text}`);
}

passwordReset([
    "Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
    "TakeOdd",
    "Cut 15 3",
    "Substitute :: -",
    "Substitute | ^",
    "Done"
]);
console.log('-------');
passwordReset([
    "up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
    "TakeOdd",
    "Cut 18 2",
    "Substitute ! ***",
    "Substitute ? .!.",
    "Done"
]);

function Takeodd(str) {
    let newPass = "";
    for (let i = 0; i < str.length; i++) {
        let current = str[i];
        if (i % 2 !== 0) {
            newPass += current;
        }
    }

    str = newPass;
    console.log(str);
    return str;
}

function Cut(str, index, length) {
    index = Number(index);
    length = Number(length);
    let start = str.slice(0, index);
    let cut = str.substring(index, index + length);
    let end = str.slice(index + length);
    str = start + end;
    console.log(str);
    return str;
}

function Substitute(str, substring, substitute) {
    if (!str.includes(substring)) {
        console.log(`Nothing to replace!`);
        return str;
    } else {
        while (str.includes(substring)) {
            str = str.replace(substring, substitute)
        }
        console.log(str);
        return str;
    }
}