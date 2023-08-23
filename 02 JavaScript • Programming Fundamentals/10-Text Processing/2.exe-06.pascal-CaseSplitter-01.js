function pascalCaseSplitter(text) {
    let result = [];
    let currentWord = "";

    // find word boundaries
    let lower = text.toLocaleLowerCase();

    for (let i = 0; i < text.length; i++) {
        if (text[i] != lower[i]) {                  // ПРОВЕРКАТА -> имаме ГОЛЯМА Буква и МАЛКА БУКВА
            if (currentWord.length > 0) {           // имаме 1 или повече букви в current-a             
                result.push(currentWord);           // значи тогава сме готови с текущата ДУМА и бутни цялата изписана Дума в масива като завършена
            }
            currentWord = text[i];                  // презапиши current-a с ГОЛЯМАТА ТЕКУЩА БУКВА значи и current-a става с ЕДИН символ ГОЛЯМА буква
        } else {
            currentWord += text[i]
        }
    }

    if (currentWord.length > 0) {                   // тук сме на последната ДУМА и трябва да я pushнем и нея
        result.push(currentWord);
    }
    // extract words
    // print result
    console.log(result.join(', '));
}
pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');
pascalCaseSplitter('HoldTheDoor');