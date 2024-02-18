function solution() {   // 100/100
    let output = '';

    return {                                                // върни ОБЕКТ с функции
        append: (s) => output += s,
        removeStart: (n) => output = output.slice(n),
        removeEnd: (n) => output = output.slice(0, -n),
        print: () => console.log(output)
    };
}

let firstZeroTest = solution();
firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();

console.log('---')

let secondZeroTest = solution();
secondZeroTest.append('123');
secondZeroTest.append('45');
secondZeroTest.removeStart(2);
secondZeroTest.removeEnd(1);
secondZeroTest.print();