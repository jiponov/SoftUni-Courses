function editElement(element, match, replacer) {    // 100/100
    while (element.textContent.includes(match)) {
        element.textContent = element.textContent.replace(match, replacer);
    }
}

