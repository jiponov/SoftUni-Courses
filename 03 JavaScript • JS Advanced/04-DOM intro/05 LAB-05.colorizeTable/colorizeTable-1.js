function colorizeTable() {    // 100/100   

    const tableRowElement = document.querySelectorAll("body > table tr:nth-of-type(2n)");
    const tableRowAsArray = Array.from(tableRowElement);

    for (let el of tableRowAsArray) {
        el.style.backgroundColor = 'teal';
    }

    //console.log(tableRowElement)
    //console.log(tableRowAsArray)
}