function validate() {       // 100/100
    const name = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmPass = document.getElementById('confirm-password');
    const companyCheckBox = document.getElementById('company');
    const companyNumber = document.getElementById('companyNumber');

    const namePattern = /^[A-Za-z0-9]{3,20}$/;
    const passPattern = /^\w{5,15}$/;
    const validsArr = [];
    const invalidsArr = [];


    document.getElementById('submit').addEventListener('click', onClick);

    companyCheckBox.addEventListener('change', () => {
        document.getElementById('companyInfo').style.display = companyCheckBox.checked ? 'block' : 'none';
    });


    function onClick(e) {
        e.preventDefault();


        if (namePattern.test(name.value)) {
            validsArr.push(name);
        } else {
            invalidsArr.push(name);
        }

        if (passPattern.test(password.value) && password.value === confirmPass.value) {
            validsArr.push(password);
            validsArr.push(confirmPass);
        } else {
            invalidsArr.push(password);
            invalidsArr.push(confirmPass);
        }

        const index = email.value.indexOf('@');
        if (index > 0 && email.value.includes('.', index)) {
            validsArr.push(email);
        } else {
            invalidsArr.push(email);
        }

        if (companyCheckBox.checked) {
            if (Number(companyNumber.value) >= 1000 && Number(companyNumber.value) <= 9999) {
                validsArr.push(companyNumber);
            } else {
                invalidsArr.push(companyNumber);
            }
        }

        validsArr.forEach(el => el.style.border = 'none');
        invalidsArr.forEach(el => {
            el.style.border = '';
            el.style.borderColor = 'red';
        });

        document.getElementById('valid').style.display = invalidsArr.length === 0 ? 'block' : 'none';
    }
}