function lockedProfile() {    // 100/100
    let btns = Array.from((document.querySelectorAll('.profile button')));
    //console.log(btns)

    for (let el of btns) {
        el.addEventListener('click', onClick);
    }

    function onClick(e) {
        const btn = e.target;
        const profile = btn.parentNode;
        const hiddenInfo = profile.querySelector('div');
        const isActive = profile.querySelector('input[type="radio"][value="unlock"]').checked;      // Unlock button

        if (isActive) {
            if (btn.textContent === 'Show more') {
                hiddenInfo.style.display = 'block';
                btn.textContent = 'Hide it';
            } else {
                hiddenInfo.style.display = 'none';
                btn.textContent = 'Show more';
            }
        }
    }
}