function colorizeTable() {    // 100/100   

    const tableRowElement = document.getElementsByTagName("tr");
    const tableRowAsArray = Array.from(tableRowElement);

    tableRowAsArray.forEach((x, i) => {
        if (i % 2 != 0) {
            x.style.backgroundColor = 'teal';
        }
    });
}