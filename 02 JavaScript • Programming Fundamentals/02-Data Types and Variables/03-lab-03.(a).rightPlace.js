function rightPlace(str, char, match) {

    let output = "";
    let strL = str.length;

    for (let i = 0; i < strL; i++) {
        if (str[i] === '_') {
            output += char;
        } else {
            output += str[i];
        }
    }

    if (output === match) {
        console.log('Matched');
    } else {
        console.log('Not Matched');
    }
}

rightPlace('Str_ng', 'I', 'Strong');
rightPlace('Str_ng', 'i', 'String');
