// 100/100
async function getInfo() {
    // read INPUT
    // request to SERVER
    // PARSE data
    // display data
    // check for error

    const stopNameElement = document.getElementById('stopName');
    const listElement = document.getElementById('buses');
    const stopID = document.getElementById('stopId').value;
    const url = `http://localhost:3030/jsonstore/bus/businfo/${stopID}`;

    try {
        //stopNameElement.textContent = 'Loading...';                             // стои в началото докато се покаже data.name и се зареди (бързо изчезва)
        listElement.innerHTML = '';                                               // ИЛИ: listElement.replaceChildren(); 

        const response = await fetch(url);

        if (response.status != 200) {                       // If the request is not successful, or the information is not in the expected format
            throw new Error('Stop ID not found');
        }
        // if (response.status != 200) {
        //     alert('Stop ID not found')
        // }

        // if (!response.ok) {
        //     let error = new Error();
        //     error.status = response.status;
        //     error.statusText = response.statusText;
        //     throw error;
        // }

        const data = await response.json();
        //console.log(response)                                                 // WE NEED TO PARSE data from response=>  body: (...)
        //console.log(data)

        stopNameElement.textContent = data.name;

        Object
            .entries(data.buses)
            .forEach(x => {
                const liElement = document.createElement('li');
                liElement.textContent = `Bus ${x[0]} arrives in ${x[1]} minutes`;
                listElement.appendChild(liElement);
            })

    } catch (error) {
        listElement.innerHTML = '';
        stopNameElement.textContent = 'Error';      // If the request is not successful, or the information is not in the expected format
    }
}