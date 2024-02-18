function timeConverter() {    // 100/100

    const ratios = {        // мерни единици отношение спрямо ЕДИН ДЕН (асоц.масив)
        days: 1,
        hours: 24,
        minutes: 1440,
        seconds: 86400
    }

    function convert(value, unit) {
        const inDays = value / ratios[unit];
        return {                                // връща func. обект
            days: inDays,
            hours: inDays * ratios.hours,
            minutes: inDays * ratios.minutes,
            seconds: inDays * ratios.seconds
        };
    }

    const inputDays = document.getElementById('days');
    const inputHours = document.getElementById('hours');
    const inputMinutes = document.getElementById('minutes');
    const inputSeconds = document.getElementById('seconds');

    document.getElementById('daysBtn').addEventListener('click', onConvert);
    document.getElementById('hoursBtn').addEventListener('click', onConvert);
    document.getElementById('minutesBtn').addEventListener('click', onConvert);
    document.getElementById('secondsBtn').addEventListener('click', onConvert);

    function onConvert(event) {
        const input = event.target.parentElement.querySelector('input[type="text"]');   // хващаме DIV родител от daysBtn напр. за да маркираме накрая id = days с type=text
        //console.log(input)
        const time = convert(Number(input.value), input.id);        // id ПАЗИ в това поле МЕРНАТА ЕДИНИЦА
        //console.log(time)
        inputDays.value = time.days;
        inputHours.value = time.hours;
        inputMinutes.value = time.minutes;
        inputSeconds.value = time.seconds;
    }
}



/*

Array.from(document.querySelectorAll('input[type="button"]'))
    .forEach(button => button.addEventListener('click', onClick));

*/