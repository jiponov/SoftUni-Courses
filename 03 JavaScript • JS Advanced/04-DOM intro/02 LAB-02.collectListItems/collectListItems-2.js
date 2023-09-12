function extractText() {    // 100/100      
    let ulElement = document.getElementById('items');
    //console.log(ulElement.textContent)
    let textareaElement = document.getElementById('result');
    textareaElement.textContent = ulElement.textContent.trim();
}