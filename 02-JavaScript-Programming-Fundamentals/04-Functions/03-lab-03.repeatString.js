function repeatString(str, n) {
    let output = '';
    for (let i = 0; i < n; i++) {
        output += str;
    }
    return output;
}

repeatString("abc", 3);
repeatString("String", 2);

let result1 = repeatString("abc", 3);
console.log(result1);
let result2 = repeatString("String", 2);
console.log(result2);

