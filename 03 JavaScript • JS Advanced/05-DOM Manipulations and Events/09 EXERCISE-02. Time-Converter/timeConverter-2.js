function timeConverter() {    // 100/100
    const btns = Array.from(document.querySelectorAll('[type="button"]'));

    btns.forEach(x => x.addEventListener('click', onClick));

    function onClick(e) {
        const timeType = e.target.parentNode.children[1].id;            // id = days OR hours OR min OR secs
        const value = Number(e.target.parentNode.children[1].value);    // input-a от потребителя

        let seconds = 0;

        if (timeType == 'days') {
            seconds = value * 24 * 60 * 60;
        } else if (timeType == 'hours') {
            seconds = value * 60 * 60;
        } else if (timeType == 'minutes') {
            seconds = value * 60;
        } else if (timeType == 'seconds') {
            seconds = value;
        }

        const minutes = seconds / 60;
        const hours = minutes / 60;
        const days = hours / 24;


        document.querySelector('#days').value = days;
        document.querySelector('#hours').value = hours;
        document.querySelector('#minutes').value = minutes;
        document.querySelector('#seconds').value = seconds;
    }
}


/*

switch (timeType) {
    case 'days':
        seconds = value * 24 * 60 * 60;
        break;
    case 'hours':
        seconds = value * 60 * 60;
        break;
    case 'minutes':
        seconds = value * 60;
        break;
    case 'seconds':
        seconds = value;
        break;
}

*/