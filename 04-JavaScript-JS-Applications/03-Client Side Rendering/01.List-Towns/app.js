import { html, render } from './node_modules/lit-html/lit-html.js';

// on submit:
// (1) parse input
// (2) render template

// template:
// (1) ul with li for each array item

const root = document.getElementById('root');

document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault();
    const towns = document.getElementById('towns').value.split(',').map(x => x.trim());

    const result = listTemplate(towns);
    render(result, root);
});


const listTemplate = (towns) => html`
<ul>
    ${towns.map(x => html`<li>${x}</li>`)}
</ul>`;