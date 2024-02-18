function multiplicationTable(n) {

    for (let i = 1; i <= 10; i++) {
        let res = n * i;
        console.log(`${n} X ${i} = ${res}`);
    }
}
multiplicationTable(5);