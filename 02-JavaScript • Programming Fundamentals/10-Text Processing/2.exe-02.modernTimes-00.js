function modernTimes(text) {

    let symbol = '#';
    let resultArr = [];

    while (text.includes(symbol)) {
        let startIndex = text.indexOf(symbol);
        text = text.substring(startIndex + 1);
        let getWord = "";
        let isValidWord = false;


        for (let i = 0; i < text.length; i++) {
            let currentChar = text[i];
            let code = currentChar.charCodeAt(0);

            if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
                getWord += currentChar;
                isValidWord = true;

            } else {
                break;
            }
        }


        if (isValidWord && (getWord.length > 0)) {
            resultArr.push(getWord);
        }
    }

    resultArr.forEach(el => console.log(el));
}
modernTimes('Nowadays everyone uses # to tag a #special word in #socialMedia');
console.log('-------------------------------')
modernTimes('The symbol # is known #variously in English-speaking #regions as the #number sign');


/* 
if (text.length - 1 == text.indexOf(currentChar)) {
    isValidWord = true;
    break;
}
 && text.length > 0
 */