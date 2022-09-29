function solve(input) {

    let word = input[0];
    let all = word.length;
    let sum = 0;

    for (i = 0; i < all; i++) {
        switch (word.charAt(i)) {
            case 'a': sum += 1; break;
            case 'e': sum += 2; break;
            case 'i': sum += 3; break;
            case 'o': sum += 4; break;
            case 'u': sum += 5; break;
        }
    }

    console.log(`${sum}`);
}
solve(["hello"]);

/*

function loopsDemo(input) {

    let word = input[0];
    let sum = 0;
    let wordL = word.length;


    for (let i = 0; i < wordL; i++) {
        if (word[i] == 'a') {
            sum += 1;
        } else if (word[i] == 'e') {
            sum += 2;
        } else if (word[i] == 'i') {
            sum += 3;
        } else if (word[i] == 'o') {
            sum += 4;
        } else if (word[i] == 'u') {
            sum += 5;
        }
    }
    console.log(sum)
}
loopsDemo(["bamboo"]);

*/

















