function reverseString(text) {
    let name = String(text);
    let textL = name.length;
    let output = "";
    for (let i = textL - 1; i >= 0; i--) {
        output += name[i];
    }
    console.log(output);
}
reverseString('Hello');
reverseString('SoftUni');
reverseString('1234');

