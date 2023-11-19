function requestValidator(data) {    // 100/100

    const methodsValid = ['GET', 'POST', 'DELETE', 'CONNECT'];
    const versionsValid = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    const uriPattern = /^[\w.]+$/g;                   // /^([\w\.]+|\*)$/g;
    const messagePattern = /^[^<>\\&'"]*$/g;


    if (!methodsValid.includes(data.method) || !data.method) {
        throw new Error('Invalid request header: Invalid Method');
    }

    if (!data.uri || !uriPattern.test(data.uri) || !data.uri == '*') {
        throw new Error('Invalid request header: Invalid URI');
    }

    if (!versionsValid.includes(data.version) || !data.version) {
        throw new Error('Invalid request header: Invalid Version');
    }

    if (!data.hasOwnProperty('message') || !messagePattern.test(data.message)) {
        throw new Error('Invalid request header: Invalid Message');
    }

    return data;
}

console.log(requestValidator({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
}));

console.log(requestValidator({
    method: 'OPTIONS',
    uri: 'git.master',
    version: 'HTTP/1.1',
    message: '-recursive'
}));

console.log(requestValidator({
    method: 'POST',
    uri: 'home.bash',
    message: 'rm -rf /*'
}));