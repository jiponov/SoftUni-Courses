/* ACTION PLAN:
- get DOM elements
- addEventListeners on Btns OR window onload (again we have addEventListener by onload page)
- get data
- parse
- textarea put value
- add NEW records (записи)
- DOM elements for body, url... POST request
- get data
*/

// 100/100
const baseUrl = `http://localhost:3030/jsonstore/messenger`;
const messages = document.getElementById('messages');


function attachEvents() {

    const submitBtn = document.getElementById('submit');
    submitBtn.addEventListener('click', sendFunc);

    const refreshBtn = document.getElementById('refresh');
    refreshBtn.addEventListener('click', refreshFunc);
}


async function sendFunc() {                    // POST request function
    const [author, content] = [document.querySelector('[name="author"]'), document.querySelector('[name="content"]')];

    if (author.value == '' || content.value == '') {    // OR:  if (!author.value || !content.value)
        return;                                         // OR:  alert('Fields are required!');              
    }


    try {
        const response = await fetch(baseUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ author: author.value.trim(), content: content.value.trim() })
        });

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message);
        }

        messages.value += `\n${author.value}: ${content.value}`;

        author.value = '';
        content.value = '';

    } catch (error) {
        alert(error.message);
    }
}


async function refreshFunc() {          // GET request function

    try {
        const response = await fetch(baseUrl);

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message);
        }

        const data = await response.json();
        //console.log(data);
        //console.log(response);

        messages.value = Object         // МАСИВ елементи с -> author: content
            .values(data)
            .map(({ author, content }) => `${author}: ${content}`)
            .join('\n');

        //console.log(typeof messages.value)  // string
        //console.log(messages.value)        

    } catch (error) {
        alert(error.message);
    }
}


attachEvents();


