function attachEvents() {       // 100/100

    const baseUrl = `http://localhost:3030/jsonstore/phonebook`;

    const ulBookElement = document.getElementById('phonebook');
    const btnLoadElement = document.getElementById('btnLoad');
    const btnCreateElement = document.getElementById('btnCreate');

    const personElement = document.getElementById('person');
    const phoneElement = document.getElementById('phone');

    btnLoadElement.addEventListener('click', onLoad);
    btnCreateElement.addEventListener('click', onCreate);

    async function onLoad() {
        ulBookElement.innerHTML = '';

        const response = await fetch(baseUrl);
        const data = await response.json();

        if (response.ok == false) {
            throw new Error(data.message);
        }

        const ids = Object
            .values(data)
            .forEach((x) => {
                const { person, phone, _id } = x;

                const li = document.createElement('li');
                li.textContent = `${x.person}: ${x.phone}`;
                li.setAttribute('id', x._id);

                const btnDeleteElement = document.createElement('button');
                btnDeleteElement.textContent = 'Delete';
                btnDeleteElement.setAttribute('id', 'btnDelete');

                li.appendChild(btnDeleteElement);
                ulBookElement.appendChild(li);

                btnDeleteElement.addEventListener('click', async () => {
                    const key = x._id;                      // e.target.parentNode.id
                    //console.log(key)
                    const response = await fetch(`${baseUrl}/${key}`, {
                        method: 'DELETE'
                    });

                    const info = await response.json();
                    li.remove();
                });
            });
    }

    async function onCreate() {

        if (!personElement.value || !phoneElement.value) {
            return;
        }

        try {
            const response = await fetch(baseUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    person: personElement.value,
                    phone: phoneElement.value,
                })
            });

            const data = await response.json();

            onLoad();                          //btnLoadElement.click();   ->>> дава 75/100 така

            personElement.value = '';
            phoneElement.value = '';

        } catch (error) {
            alert(error.message);
        }
    }
}

attachEvents();