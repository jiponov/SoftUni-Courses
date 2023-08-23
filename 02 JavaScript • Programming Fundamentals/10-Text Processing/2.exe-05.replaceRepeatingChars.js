function replaceRepeatingChars(text) {
    let result = text[0];
    for (let i = 1; i < text.length; i++) {             // от ВТОРАТА  буква напред проверяваме
        if (text[i] != text[i - 1]) {
            result += text[i]
        }
    }
    console.log(result);
}
replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa');