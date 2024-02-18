function toggle() {    // 100/100
    let button = document.querySelector('.button');     // let button = document.getElementsByClassName('button')[0];
    let text = document.querySelector('#extra');        // let text = document.getElementById('extra');
    //console.log(button);

    if (button.textContent == 'More') {
        button.textContent = 'Less';
        text.style.display = 'block';
    } else {
        button.textContent = 'More';
        text.style.display = 'none';
    }
}



/*

To change the text content of a button, you could use getElementsByClassName. 
However, that returns a collection and we need only one element from it, 
so the correct way is to use getElementsByClassName("button")[0] 
as it will return the needed span element.

*/