// 100/100
document.getElementById('form').addEventListener('submit', submitStudent);
const baseUrl = 'http://localhost:3030/jsonstore/collections/students';

students();

async function students() {
    const tbody = document.querySelector('tbody');
    tbody.replaceChildren();

    try {
        const response = await fetch(baseUrl);

        if (!response.ok) {
            throw new Error('Students can\'t load');
        }

        const data = await response.json();
        Object
            .values(data)
            .forEach(x => {
                const student = createElement('tr',
                    createElement('td', x.firstName),
                    createElement('td', x.lastName),
                    createElement('td', x.facultyNumber),
                    createElement('td', x.grade),
                );
                tbody.appendChild(student);
            });
    } catch (error) {
        alert(error.message);
    }
}

async function submitStudent(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = {
        firstName: formData.get('firstName'),
        lastName: formData.get('lastName'),
        facultyNumber: formData.get('facultyNumber'),
        grade: formData.get('grade'),
    };

    if (!data.firstName || !data.lastName || !data.facultyNumber || !data.grade) {
        return;
    }

    try {
        const response = await fetch(baseUrl, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error('Error with submit student');
        }

        students();

    } catch (error) {
        alert(error.message);
    }
}

function createElement(type, ...content) {
    const element = document.createElement(type);
    content.forEach(x => {
        if (typeof x === 'string' || typeof x === 'number') {
            x = document.createTextNode(x);
        }
        element.appendChild(x);
    });

    return element;
}

