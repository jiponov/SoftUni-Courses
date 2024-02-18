function emojiDetector(input) {          // 100/100
    'use strict'
    let text = input.shift();

    let patternDigits = /(?<num>\d+)/g;
    let threshold = text.match(patternDigits).join('').split('').map(Number).reduce((a, v) => a * v, 1);

    let patternEmoji = /(?<symbol>::|\*\*)(?<emoji>[A-Z][a-z]{2,})\1/g;
    let match = patternEmoji.exec(text);
    let counter = 0;
    let result = [];

    while (match != null) {
        let wholeMatch = match[0];
        counter++;
        let emoji = match.groups.emoji;
        let coolness = 0;

        for (let char of emoji) {
            let value = char.charCodeAt();
            coolness += value;
        }

        if (coolness > threshold) {
            result.push(wholeMatch);
        }

        match = patternEmoji.exec(text);
    }

    console.log(`Cool threshold: ${threshold}`);
    console.log(`${counter} emojis found in the text. The cool ones are:`);
    result.forEach(el => console.log(el));
}

emojiDetector([
    "In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"
]);
console.log('-------');
emojiDetector([
    "5, 4, 3, 2, 1, go! The 1-th consecutive banana-eating contest has begun! ::Joy:: **Banana** ::Wink:: **Vali** ::valid_emoji::"
]);
console.log('-------');
emojiDetector([
    "It is a long established fact that 1 a reader will be distracted by 9 the readable content of a page when looking at its layout. The point of using ::LoremIpsum:: is that it has a more-or-less normal 3 distribution of 8 letters, as opposed to using 'Content here, content 99 here', making it look like readable **English**."
]);