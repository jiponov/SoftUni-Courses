function matchFullName(input) {     // 100/100

    let pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;
    let output = [...input.matchAll(pattern)].map(match => match[0]);
    console.log(output.join(' '));
}

matchFullName("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov");