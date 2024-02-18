function formatTheText() {    // 100/100    

    const input = document.getElementById('input').value;
    const resultDiv = document.getElementById('output');
    const textArr = input.split('.').filter(s => s.length);
    const paragraphs = [];

    while (textArr.length) {
        const paragraph = textArr.splice(0, 3).join('.') + '.';
        paragraphs.push(`<p>${paragraph}</p>`);
    }

    resultDiv.innerHTML = paragraphs.join('\n');
}