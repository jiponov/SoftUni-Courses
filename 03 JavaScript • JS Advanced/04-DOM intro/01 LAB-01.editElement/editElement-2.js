function editElement(el, match, replacer) {    // 100/100
    const text = el.textContent;
    const pattern = new RegExp(match, 'g');
    const edited = text.replace(pattern, replacer);
    el.textContent = edited;
}