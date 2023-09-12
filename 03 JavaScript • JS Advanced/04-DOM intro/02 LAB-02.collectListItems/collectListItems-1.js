function extractText() {    // 100/100   

    // DOM TREE -> JS : make classic Array from Element
    const items = Array.from(document.querySelectorAll('ul#items li'));
    // JS : transform array text row by row export
    const output = items.map(x => x.textContent).join('\n');
    // DOM TREE : get textarea Element 
    const textareaElement = document.getElementById('result');
    // DOM TREE : change value of Element
    textareaElement.value = output;

    //console.log(items)
    //console.log(output)
    //console.log(textareaElement.textContent)
}

