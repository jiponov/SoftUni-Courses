function charactersInRange(a, b) {
    let char1 = a.charCodeAt(0);
    let char2 = b.charCodeAt(0);

    let newA = 0;
    let newB = 0;
    if (char1 >= char2) {
        newB = char1;
        newA = char2;
    } else {
        newB = char2;
        newA = char1;
    }
    // console.log(newA)
    let output = "";
    for (let i = newA + 1; i < newB; i++) {
        let get = String.fromCharCode(i);
        // console.log(get)
        output += get + ' ';
    }

    console.log(output);
}

charactersInRange('a', 'd');
charactersInRange('#', ':');
charactersInRange('C', '#');


