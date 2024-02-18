function validate() {   // 100/100      Dynamic-Validation

    let email = document.getElementById('email');

    email.addEventListener('change', onChange);

    function onChange() {
        const pattern = /^[a-z]+@[a-z]+\.[a-z]+$/;

        if (pattern.test(email.value)) {
            email.classList.remove('error');
        } else {
            email.classList.add('error');
        }
    }
}