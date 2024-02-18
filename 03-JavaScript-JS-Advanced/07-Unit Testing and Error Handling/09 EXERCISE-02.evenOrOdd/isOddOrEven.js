// UNIT TESTING - You are required to submit only the unit tests for the object/function you are testing. 
// the NAME of the given FUNCTION is MUST HAVE FOR UNIT TEST - judge system softuni! 
// We have to match for tests the exact same NAME: isOddOrEven

function isOddOrEven(string) {     
    if (typeof (string) !== 'string') {
        return undefined;
    }
    if (string.length % 2 === 0) {
        return "even";
    }

    return "odd";
}

module.exports = isOddOrEven;