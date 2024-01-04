function solve() {      // 100/100

    const label = document.querySelector('#info span');         // document.getElementsByClassName('info')[0];
    const departBtn = document.getElementById('depart');
    const arriveBtn = document.getElementById('arrive');

    let stop = {
        next: 'depot'       // стартираме от депото
    };

    async function depart() {               // When the "Depart" button is clicked, make a GET request to the server 
        // get info for NEXT stop
        // display NEXT stop
        departBtn.disabled = true;
        const url = `http://localhost:3030/jsonstore/bus/schedule/${stop.next}`;        // правим GET заявка за да вземем ДАННИ от сървъра ни (локалния сървър)
        const response = await fetch(url);
        //console.log(response);

        if (response.status != 200) {       // за проверка симулираме данните от тук при stop горе: next: 'asdfesa', а не depot
            label.textContent = `Error`;
            arriveBtn.disabled = true;
            departBtn.disabled = true;
            alert('Wrong data!')            // добавка от нас, НЯМА го в задачата по условие
        }

        stop = await response.json();
        label.textContent = `Next stop ${stop.name}`;

        arriveBtn.disabled = false;

    }

    function arrive() {
        label.textContent = `Arriving at ${stop.name}`;
        departBtn.disabled = false;
        arriveBtn.disabled = true;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();