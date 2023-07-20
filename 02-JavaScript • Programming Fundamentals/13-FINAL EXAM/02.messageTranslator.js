function solve(input) {

    let count = Number(input.shift());
    let isValid = false;
    let command = '';
    let message = '';

    const decypher = (msg) => {
        let arr = msg.split('');
        return arr.map(item => {
            return item.charCodeAt();
        }).join(' ');
    };


    const stripEnds = (string) => {
        return string.substring(1, string.length - 1);
    }


    const lineValid = (line) => {
        return line.includes('!:[');
    }

    const commandLineValid = (commandLine) => {
        return (commandLine.startsWith('!') && commandLine.endsWith('!'));
    }

    const onlyLowerCase = (word) => {
        for (const letter of word) {
            if (letter.charCodeAt() < 97 || letter.charCodeAt() > 122) {
                return false;
            }
        }
        return true;
    }

    const commandValid = (command) => {
        if ((command[0].charCodeAt() >= 65 && command[0].charCodeAt() <= 90) && onlyLowerCase(command.substring(1)) && command.length >= 3) {
            return true;
        } else {
            return false;
        }
    }

    const isOnlyAlphabetical = (string) => {
        for (const letter of string) {
            if ((letter.charCodeAt() < 65 || letter.charCodeAt() > 122) || (letter.charCodeAt() > 90 && letter.charCodeAt() < 97)) {
                return false;
            }
        }
        return true;
    }


    const isValidMessageLine = (line) => {
        return (line.startsWith('[') && line.endsWith(']'))
    }

    const messageIsValid = (message) => {
        return (isOnlyAlphabetical(message) && message.length >= 8);
    }



    for (const line of input) {
        if (lineValid(line)) {
            let [commandLine, messageLine] = line.split(':');
            if (commandLineValid(commandLine) && isValidMessageLine(messageLine)) {
                command = stripEnds(commandLine);
                message = stripEnds(messageLine);
                if (commandValid(command) && messageIsValid(message)) {
                    isValid = true;

                }
            }
        }


        console.log(isValid === false ? `The message is invalid` : `${command}: ${decypher(message)}`);
        isValid = false;
    }

}

solve(["2",
    "!Send!:[IvanisHere]",
    "*Time@:[Itis5amAlready"])