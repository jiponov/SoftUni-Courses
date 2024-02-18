function modernTimes(text) {
    let result = [];

    let collecting = false;
    let currentWord = '';

    // iterate all characters
    for (let char of text) {
        if (collecting) {
            if (char == ' ') {

                if (currentWord.length > 0) {
                    result.push(currentWord);
                }
                collecting = false;
                currentWord = '';                                  // трием думата и наново

            } else {
                let code = char.charCodeAt(0);                   // първия символ дали е БУКВА
                if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
                    currentWord += char;
                } else {
                    collecting = false;
                }
            }

        } else {
            // if character is # -> begin collecting letters, until non-letter is found
            if (char == '#') {
                collecting = true;
            }
        }
    }

    if (collecting && currentWord.length > 0) {
        result.push(currentWord);
    }

    for (let word of result) {
        console.log(word);
    }
}
modernTimes('Nowadays everyone uses # to tag a #special word in #socialMedia');