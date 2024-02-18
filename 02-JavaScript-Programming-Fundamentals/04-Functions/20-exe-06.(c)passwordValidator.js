function solve(password) {
    let letters = /^[a-zA-Z]+$/;
    let numbers = /^[0-9]+$/;
    let symbols = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    let charCounter = 0;
    let numCounter = 0;
    let symbolsCounter = 0;
    for (let i = 0; i < password.length; i++) {
        let currentEl = password.split("");
        if (currentEl[i].match(letters)) {
            charCounter++;
        } else if (currentEl[i].match(numbers)) {
            numCounter++;
        }

        if (currentEl[i].match(symbols)) {
            symbolsCounter++;
        }
    }

    if (charCounter >= 6 && charCounter <= 10 && numCounter >= 2) {
        console.log("Password is valid");
    }

    if (symbolsCounter > 0) {
        console.log("Password must consist only of letters and digits");
        console.log("Password must have at least 2 digits");
    } else if (charCounter < 6 || (charCounter > 10 && numCounter == 0)) {
        console.log("Password must be between 6 and 10 characters");
        console.log("Password must have at least 2 digits");
    }
}

solve('logIn');
solve('MyPass123');
solve('Pa$s$s');