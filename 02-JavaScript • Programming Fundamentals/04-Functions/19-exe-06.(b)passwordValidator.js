function solve(password) {
    function isLengthEnough(stringPassword) {
        return stringPassword.length >= 6 && stringPassword.length <= 10
    }
    function areOnlyLettersAndDigits(stringPassword) {
        for (let currCharI of stringPassword) {
            let currChar = currCharI.charCodeAt(0)

            if (
                !(currChar >= 65 && currChar <= 90) &&
                !(currChar >= 97 && currChar <= 122) &&
                !(currChar >= 48 && currChar <= 57)) {
                return false
            }
        }
        return true
    }
    function isHavingAtLeastTwoDigits(stringPassword) {
        let counter = 0;
        for (let charIndex of stringPassword) {
            let currChar = charIndex.charCodeAt(0)
            if (currChar >= 48 && currChar <= 57) {
                counter++
            }
        }
        return counter >= 2 ? true : false
    }

    if (isLengthEnough(password) && areOnlyLettersAndDigits(password) && isHavingAtLeastTwoDigits(password)) {
        console.log('Password is valid');
    }
    if (!isLengthEnough(password)) {
        console.log(`Password must be between 6 and 10 characters`);
    }
    if (!areOnlyLettersAndDigits(password)) {
        console.log(`Password must consist only of letters and digits`);
    }
    if (!isHavingAtLeastTwoDigits(password)) {
        console.log(`Password must have at least 2 digits`);
    }
}

solve('logIn');
solve('MyPass123');
solve('Pa$s$s');