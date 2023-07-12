function schoolLibrary(inputArr) {
    let booksShelf = inputArr.shift().split('&');
    let index = 0;
    let commands = inputArr[index++];

    while (commands !== 'Done') {
        let currentLine = commands.split(' | ');
        let operation = currentLine[0];
        let nameBook = currentLine[1];

        if (operation == 'Add Book') {
            if (!booksShelf.includes(nameBook)) {
                booksShelf.unshift(nameBook);
            }
        } else if (operation == 'Take Book') {
            if (booksShelf.includes(nameBook)) {
                let indexOfBook = booksShelf.indexOf(nameBook);
                booksShelf.splice(indexOfBook, 1);
            }
        } else if (operation == 'Swap Books') {
            let nameBook2 = currentLine[2];
            if (booksShelf.includes(nameBook) && booksShelf.includes(nameBook2)) {
                let indexOfBook1 = booksShelf.indexOf(nameBook);
                let indexOfBook2 = booksShelf.indexOf(nameBook2);
                let waitingBook = nameBook;
                nameBook = nameBook2;
                nameBook2 = waitingBook;
                booksShelf[indexOfBook1] = nameBook;
                booksShelf[indexOfBook2] = nameBook2;
            }
        } else if (operation == 'Insert Book') {
            if (!booksShelf.includes(nameBook)) {
                booksShelf.push(nameBook);
            }
        } else if (operation == 'Check Book') {
            let indexAsNumber = Number(nameBook);
            if (indexAsNumber >= 0 && indexAsNumber <= booksShelf.length) {
                let book = booksShelf[indexAsNumber];
                console.log(book);
            }
        }

        commands = inputArr[index++];
    }

    console.log(booksShelf.join(', '));
}

schoolLibrary(["Don Quixote&The Great Gatsby&Moby Dick",
    "Add Book | Ulysses",
    "Take Book | Don Quixote",
    "Insert Book | Alice's Adventures in Wonderland",
    "Done"]);
console.log('---');
schoolLibrary(["Anna Karenina&Heart of Darkness&Catch-22&The Stranger",
    "Add Book | Catch-22",
    "Swap Books | Anna Karenina | Catch-22",
    "Take Book | David Copperfield",
    "Done"]);
console.log('---');
schoolLibrary(["War and Peace&Hamlet&Ulysses&Madame Bovary",
    "Check Book | 2",
    "Swap Books | Don Quixote | Ulysses",
    "Done"]);
