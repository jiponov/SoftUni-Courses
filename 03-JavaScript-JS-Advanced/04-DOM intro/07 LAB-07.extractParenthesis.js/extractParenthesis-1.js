function extractParenthesis(content) {    // 100/100   
    const text = document.getElementById('content').textContent;
    //console.log(text);
    const output = [];
    const pattern = /\((.+?)\)/g;

    let match = pattern.exec(text);

    while (match) {
        output.push(match[1]);
        match = pattern.exec(text);
    }

    return output.join(';');
}

