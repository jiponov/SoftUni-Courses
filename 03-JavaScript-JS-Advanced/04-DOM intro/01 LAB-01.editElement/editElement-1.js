function editElement(el, match, replacer) {    // 100/100  REGEX SOLUTION

    const pattern = new RegExp(match, 'g');                         // за match навсякъде където се повтаря
    el.textContent = el.textContent.replace(pattern, replacer);     // RE-ASSIGN Element.textContent from HTML file
}