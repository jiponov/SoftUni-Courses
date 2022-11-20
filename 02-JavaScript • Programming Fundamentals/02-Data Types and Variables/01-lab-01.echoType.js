function echoType(p) {

    let type = typeof (p);
    if (type == 'string' || type == 'number') {
        console.log(type);
        console.log(`${p}`);
    } else {
        console.log(type);
        console.log(`Parameter is not suitable for printing`);
    }
}

echoType('Hello, JavaScript!');
echoType(18);
echoType(null);