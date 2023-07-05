function matchFullName(input) {     // 100/100

    let pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;
    let output = [];

    let match = pattern.exec(input);

    while (match != null) {
        output.push(match[0]);

        match = pattern.exec(input);
    }

    //console.log(output);
    console.log(output.join(' '));
}

matchFullName("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov");