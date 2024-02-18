function modernTimes(text) {
    text = text.split(' ');
    for (const currentWord of text) {
        if (currentWord[0] === '#' && currentWord.length > 1) {
            let isValid = false;
            let currentWordArray = currentWord.slice(1).split('');
            currentWordArray.every(char => {
                if ((char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) || (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122)) {
                    return isValid = true;
                } else {
                    return isValid = false;
                }
            });
            if (isValid) {
                console.log(currentWord.slice(1));
            }
        }
    }
}
modernTimes('Nowadays everyone uses # to tag a #special word in #socialMedia');