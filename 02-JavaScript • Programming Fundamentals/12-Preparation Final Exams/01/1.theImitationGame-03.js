function theImitationGame(inputArr) {          // 100/100
    let commands = {
        Move,
        Insert,
        ChangeAll,
    };
    // overall structure
    // individual commands

    // take encoded message
    let message = inputArr.shift();

    // repeat for every line of input
    while (inputArr[0] != 'Decode') {
        let line = inputArr.shift();
        // - parse line
        let tokens = line.split('|');
        //console.log(tokens)
        // - find and execute command with parse parameters
        let operation = tokens[0];
        //console.log(commands[operation]);
        message = commands[operation](message, tokens[1], tokens[2]);
    }

    // print result
    console.log(`The decrypted message is: ${message}`);

    function Move(str, num) {                       // ВИНАГИ почваме с ИНДЕКСА str и след ТОВА по условие задачата за Move

        // take first n letters
        let start = str.substring(0, num);          // от НУЛА ИНДЕКС до count-a който е 3
        // take remaining letters
        let end = str.substring(num);               // от  num  Нататък вземи
        //console.log(end)
        // return end + start
        return end + start;                         // връщаме резултата като конкатенация
    }

    function Insert(str, index, value) {              // ВИНАГИ почваме с ИНДЕКСА str и след ТОВА по условие задачата за Insert               

        // take first half
        let start = str.substring(0, index);
        //take second half
        let end = str.substring(index);             // като това число взима до края на стринга (тоест може да е голям count-a като стойност - взима ги докрая)
        // return first + value + second
        return start + value + end;
    }

    function ChangeAll(str, match, value) {           // ВИНАГИ почваме с ИНДЕКСА str и след ТОВА по условие задачата за ChangeAll

        // tokenize by removing match
        let tokens = str.split(match);
        // stitch by value
        return tokens.join(value)
    }
}

theImitationGame([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode',
]);



//console.log(Move('lloHe', 3));                  // просто пример
//console.log(Move('youare', 3));                 // просто пример
//console.log(Insert('llHe', 2, 'o'));                 // просто пример
//console.log(ChangeAll('zzHe', 'z', 'l'));                 // просто пример




// llHe
// lloHe
// lloHe
// Hello