function mirrorWorlds(input) {          // 100/100
    'use strict'
    let text = input.shift();
    let pattern = /(?<symbol>@|#)(?<word1>[A-Za-z]{3,})\1\1(?<word2>[A-Za-z]{3,})\1/g;

    let match = pattern.exec(text);

    let mirrorWorlds = [];
    let pairsValid = [];

    let counterPairs = 0;

    while (match != null) {
        let word1 = match.groups.word1;
        let word2 = match.groups.word2;

        let compareWord2 = ""               // let compareWord2 = word2.split('').reverse().join('');
        for (let i = word2.length - 1; i >= 0; i--) {
            let char = word2[i];
            compareWord2 += char;
        }

        if ((word1 == compareWord2) && (word1.length == compareWord2.length)) {
            mirrorWorlds.push([word1, word2]);
        }

        if ((word2.includes(word1)) && (word1.length != word2.length)) {
            pairsValid.push([word1, compareWord2]);
        }

        if (word1 != undefined && word2 != undefined) {
            counterPairs++;
        }

        match = pattern.exec(text);
    }


    if (counterPairs > 0) {
        console.log(`${counterPairs} word pairs found!`);
    } else {
        console.log(`No word pairs found!`);
    }


    let result = [];

    if (mirrorWorlds.length == 0) {
        console.log(`No mirror words!`);
    } else {
        console.log(`The mirror words are:`);
        for (let i = 0; i < mirrorWorlds.length; i++) {
            let el = mirrorWorlds[i];
            let pairs = `${el[0]} <=> ${el[1]}`;
            result.push(pairs);
        }
    }
    console.log(result.join(', ').trim());
}

mirrorWorlds([
    '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
]);
console.log('-------');
mirrorWorlds([
    '#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@'
]);
console.log('-------');
mirrorWorlds([
    '#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#'
]);
