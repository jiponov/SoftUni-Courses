function login(input) {

    let index = 0;
    let pass = input[index];
    index++;
    let passL = pass.length;
    let match = "";                             // let match = pass.split('').reverse().join('');
    for (let i = passL - 1; i >= 0; i--) {
        match += pass[i];
    }

    let command = input[index];
    index++;

    let isFound = false;
    let counter = 0;

    while (command != match) {
        isFound = false;
        counter++;
        if (counter >= 4) {
            isFound = false;
            console.log(`User ${pass} blocked!`)
            break;
        }
        console.log(`Incorrect password. Try again.`);
        command = input[index++];
    }

    if (!isFound && counter <= 3) {                     // if (command == pass)
        console.log(`User ${pass} logged in.`);
    }
}
login(['Acer', 'login', 'go', 'let me in', 'recA']);
login(console.log(`-----------------`));
login(['sunny', 'rainy', 'cloudy', 'sunny', 'not sunny']);

