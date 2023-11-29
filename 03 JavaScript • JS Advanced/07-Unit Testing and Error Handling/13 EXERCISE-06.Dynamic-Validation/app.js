function validate() {       // 100/100
    let emailElement = document.getElementById('email');
    emailElement.addEventListener('change', onChange);

    function onChange(e) {
        const pattern = /[a-z]+@[a-z]+\.[a-z]+/gm;

        if (pattern.test(e.target.value)) {
            e.target.classList.remove('error');
        } else {
            e.target.classList.add('error');
        }
    }
}