function attachEvents() {
    const name = document.getElementById('location')
    const getWeatherElementBtn = document.getElementById('submit');
    const forecastDivElement = document.getElementById('forecast');
    const currentDivElement = document.getElementById('current');
    const upcomingDivElement = document.getElementById('upcoming');

    let divElementCurrent = document.createElement('div');
    let divElementUpcoming = document.createElement('div');

    const weatherSymbols = {
        'Sunny': '&#x2600;',
        'Partly sunny': '&#x26C5;',
        'Overcast': '&#x2601;',
        'Rain': '&#x2614;',
        'Degrees': '&#176;'
    };

    getWeatherElementBtn.addEventListener('click', getForecast);
}

attachEvents();


async function getForecast(name) {                      // потребител натиска бутон GET WEATHER в CHROME и тази функция взима инфото от другите 3 функции надолу и връща чрез DOM РЕЗУЛТАТА на ЕКРАНА!
    divElementCurrent.innerHTML = '';
    divElementUpcoming.innerHTML = '';

    divElementCurrent.setAttribute('class', 'forecast-info');
    divElementUpcoming.setAttribute('class', 'forecasts');
    forecastDivElement.style.display = 'inline';

    const code = await getLocationCode(name);

    const [currentResult, upcomingResult] = await Promise.all([
        getCurrentTime(code),
        getUpcomingTime(code)
    ]);

    return { currentResult, upcomingResult };
}

async function getLocationCode(name) {
    // първа заявка - от името на локацията взимаме кода за другите 2 заявки          
    // в CHROME за тестване:  await getLocationCode('London')

    const url = 'http://localhost:3030/jsonstore/forecaster/locations';

    const response = await fetch(url);
    const data = await response.json();
    // console.log(data);
    const location = data.find(x => x.name == name.value);       // в data търси ИМЕТО при всички елементи което съвпада с ИМЕТО name горе във функцията
    return location.code;                                  // връща 'london' в CONSOLE при await getLocationCode('London')
}

async function getCurrentTime(code) {             // взимаме РЕЗУЛТАТА - тоест return-атия code от getLocationCode функцията
    const url = 'http://localhost:3030/jsonstore/forecaster/today/' + code;

    const response = await fetch(url);
    const data = await response.json();

    return data;                                    // тестваме в CHROME с: await getCurrent('barcelona')
}

async function getUpcomingTime(code) {             // взимаме РЕЗУЛТАТА - тоест return-атия code от getLocationCode функцията
    const url = 'http://localhost:3030/jsonstore/forecaster/upcoming/' + code;

    const response = await fetch(url);
    const data = await response.json();

    return data;                                    // тестваме в CHROME с: await getUpcomingTime('ny')
}


