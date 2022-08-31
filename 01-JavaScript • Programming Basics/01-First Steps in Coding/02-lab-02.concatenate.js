function concatenateData(input) {
    let firstName = input[0];
    let lastName = input[1];
    let age = input[2];
    let town = input[3];
    let result = (`You are ${firstName} ${lastName}, a ${age}-years old person from ${town}.`);
    console.log(result);
}
concatenateData(['Lubomir', 'Jiponov', 34, 'Sofia']);