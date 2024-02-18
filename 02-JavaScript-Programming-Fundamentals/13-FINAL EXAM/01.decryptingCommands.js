function code(input) {          // 100/100 
    let word = input.shift()

    while (input[0] !== 'Finish') {
        let tokens = input.shift().split(' ')
        let operation = tokens[0]
        let w1 = tokens[1]
        let w2 = tokens[2]

        if (operation == 'Replace') {
            if (word.includes(w1)) {
                word = word.replace(w1, w2)
                if (word.includes(w1)) {
                    word = word.replace(w1, w2)
                } if (word.includes(w1)) {
                    word = word.replace(w1, w2)
                } if (word.includes(w1)) {
                    word = word.replace(w1, w2)
                }
                console.log(word);
            } else {
                console.log(word);
            }

        } else if (operation == 'Cut') {
            if ((+w1 >= 0 && +w1 < word.length) && (+w2 >= 0 && +w2 < word.length)) {
                let tempText1 = word.slice(0, w1)
                let tempText2 = word.slice(+w2 + 1,)
                word = tempText1 + tempText2
                console.log(word);
            } else {
                console.log(`Invalid indices!`);
            }

        } else if (operation == 'Make') {
            if (w1 == 'Upper') {
                word = word.toUpperCase()
                console.log(word);
            } else {
                word = word.toLowerCase()
                console.log(word);
            }

        } else if (operation == 'Check') {
            if (word.includes(w1)) {
                console.log(`Message contains ${w1}`);
            } else {
                console.log(`Message doesn't contain ${w1}`);
            }

        } else if (operation == 'Sum') {
            if ((+w1 >= 0 && +w1 < word.length) && (+w2 >= 0 && +w2 < word.length)) {
                let sum = 0
                let tempText = word.substring(+w1, (+w2 + 1))
                for (let word of tempText) {
                    let asciiNumber = +word.charCodeAt()
                    sum = sum + asciiNumber
                }
                console.log(sum);
            } else {
                console.log(`Invalid indices!`);
            }
        }
    }
}

code([
    "ILikeSoftUni",
    "Replace I We",
    "Make Upper",
    "Check SoftUni",
    "Sum 1 4",
    "Cut 1 4",
    "Finish",
]);

console.log(`----------`);

code([
    "HappyNameDay",
    "Replace p r",
    "Make Lower",
    "Cut 2 23",
    "Sum -2 2",
    "Finish",]);