function modernTimes(text) {
    let tokens = text.split(' ');                       // цепим думите
    let result = [];

    for (let token of tokens) {                            // всяка дума от думите проверка
        if (token.length > 1 && token[0] == '#') {      // ако са 2 символа и повече  +  #   е ДУМАТА текущата
            let validWord = true;
            for (let char of token.substring(1)) {      // ot 1 символ нататък думата
                let code = char.charCodeAt(0);
                if (code < 65 || code > 122 || (code >= 91 && code <= 96)) {
                    validWord = false;
                    break;                                  // това break ще ме хвръли извън ТЕКУЩИЯ FOR -OF цикъл на IF-a
                }
            }

            if (validWord) {
                result.push(token.substring(1));
            }
        }
    }

    for (let word of result) {
        console.log(word)
    }
}
modernTimes('Nowadays everyone uses # to tag a #special word in #socialMedia');