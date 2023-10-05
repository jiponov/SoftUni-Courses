function focused() {    // 100/100            // Highlight Active
    const inputElement = document.getElementsByTagName('input');
    const fields = Array.from(inputElement);

    for (let el of fields) {
        el.addEventListener('focus', onFocus);
        el.addEventListener('blur', onBlur);
    }

    function onFocus(event) {
        event.target.parentNode.className = 'focused';
        // АЛТЕРНАТИВА
        // event.target.parentNode.classList.add('focused');
    }

    function onBlur(event) {
        event.target.parentNode.className = '';
        // АЛТЕРНАТИВА
        // event.target.parentNode.classList.remove('focused');
    }
}