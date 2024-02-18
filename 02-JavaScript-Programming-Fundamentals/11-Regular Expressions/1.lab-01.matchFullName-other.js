function matchFullName(names) {

    // let pattern = /(?<![A-Z])[A-Z]{1}[a-z]+ [A-Z]{1}[a-z]+/gm // това е с lookahead - но хваща само IVan Ivanov, 
    // // а и те казаха, че няма да използваме lookahead; 
    let pattern = /\b[A-Z][a-z]{1,} [A-Z][a-z]{1,}\b/g                //  /\b([A-Z]{1}[a-z]+) [A-Z]{1}[a-z]+\b/g   
    let validNames = [];
    let target;

    while ((target = pattern.exec(names)) !== null) {
        validNames.push(target[0]);
    }
    console.log(validNames.join(' '));
}
matchFullName("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov");