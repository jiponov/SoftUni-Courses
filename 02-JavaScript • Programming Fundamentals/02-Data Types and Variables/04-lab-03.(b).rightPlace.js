function rightPlace(str, char, match) {

    let output = str.replace('_', char);              // .replace()
    // console.log(output);

    if (output === match) {
        console.log('Matched');
    } else {
        console.log('Not Matched');
    }
}
rightPlace('Str_ng', 'I', 'Strong');
rightPlace('Str_ng', 'i', 'String');