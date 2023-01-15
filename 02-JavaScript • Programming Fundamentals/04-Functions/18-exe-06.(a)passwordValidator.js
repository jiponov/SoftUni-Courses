function passwordValidator(pass) {
    let passL = pass.length;

    let isCode1 = false;
    if (passL >= 6 && passL <= 10) {
        isCode1 = true;
    }

    let isCode2 = false;
    let isCode3 = false;
    let counter = 0;
    for (let i = 0; i < passL; i++) {
        let passAsCode = pass.charCodeAt(i)

        if ((passAsCode >= 48 && passAsCode <= 57) || (passAsCode >= 65 && passAsCode <= 90) || (passAsCode >= 97 && passAsCode <= 122)) {
            isCode2 = true;
        } else {
            isCode2 = false;
            break;
        }

        if ((passAsCode >= 48 && passAsCode <= 57)) {
            counter++;
            if (counter >= 2) {
                isCode3 = true;
            }
        }
    }


    if (isCode1 && isCode2 && isCode3) {
        console.log(`Password is valid`);
    } else {
        if (!isCode1) {
            console.log(`Password must be between 6 and 10 characters`);
        }
        if (!isCode2) {
            console.log(`Password must consist only of letters and digits`);
        }
        if (!isCode3) {
            console.log(`Password must have at least 2 digits`);
        }
    }

}

passwordValidator('logIn');
console.log('---');
passwordValidator('MyPass123');
console.log('---');
passwordValidator('Pa$s$s');
