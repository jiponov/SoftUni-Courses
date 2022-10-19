function solve(input) {

    let index = 0;
    let book = input[index];
    index++;
    let data = input[index];

    let bookCounter = 0;

    let inputL = input.length;

    while (data != 'No More Books') {
        bookCounter++;

        if (data == book) {
            console.log(`You checked ${bookCounter - 1} books and found it.`)
            break;
        }
        index++;
        data = input[index];

        if (bookCounter == inputL - 1) {
            console.log(`The book you search is not here!`);
            console.log(`You checked ${bookCounter} books.`);
            break;
        }
    }

    if (data == 'No More Books') {
        console.log(`The book you search is not here!`);
        console.log(`You checked ${bookCounter} books.`);
    }
}
solve(["Troy",
    "Stronger",
    "Life Style",
    "Troy"]);
solve(["The Spot",
    "Hunger Games",
    "Harry Potter",
    "Torronto",
    "Spotify",
    "No More Books"]);
solve(["Bourne",
    "True Story",
    "Forever",
    "More Space",
    "The Girl",
    "Spaceship",
    "Strongest",
    "Profit",
    "Tripple",
    "Stella",
    "The Matrix",
    "Bourne"]);