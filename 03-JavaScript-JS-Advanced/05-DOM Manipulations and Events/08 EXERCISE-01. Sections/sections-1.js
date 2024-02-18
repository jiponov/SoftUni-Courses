function sections(words) {    // 100/100  with ONE EVENT HANDLER (addEventListener)
   // create <div>
   // create <p>
   // set <p> content
   // configure <p> to be hidden (display: none)
   // add <p> to <div>
   // add <div> to PAGE
   // configure <div> eventListener

   let content = document.getElementById('content');

   for (let el of words) {
      let div = document.createElement('div');
      let p = document.createElement('p');
      p.textContent = el;
      p.style.display = 'none';

      div.appendChild(p);
      //console.log(div);      
      content.appendChild(div);
   }

   content.addEventListener('click', onClick);

   function onClick(e) {
      if (e.target.tagName == 'DIV' && e.target != content) {        // или (e.target.tagName == 'DIV' && e.target.id != 'content')
         e.target.children[0].style.display = 'block';   // или '' празен стринг (тоест НЕ е none)
      }
   }
}

