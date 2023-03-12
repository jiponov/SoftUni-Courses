function phoneBook(input) {

    let book = {};
    for (let line of input) {
        let token = line.split(' ')
        let name = token[0]
        let phone = token[1]
        book[name] = phone
    }

    for (let el in book) {
        console.log(`${el} -> ${book[el]}`)
    }
}

phoneBook([
    'Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344'
]);