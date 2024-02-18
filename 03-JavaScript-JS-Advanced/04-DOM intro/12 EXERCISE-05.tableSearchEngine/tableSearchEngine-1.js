function tableSearchEngine() {    // 100/100
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   let input = document.getElementById('searchField');
   let rows = document.querySelectorAll('tbody tr');


   function onClick() {

      for (let row of rows) {
         row.classList.remove('select');                                      // премахва класовете
         if (input.value != '' && row.innerHTML.includes(input.value)) {      // .includes(): check for both full words and single letters
            row.className = 'select';
            //console.log(row.className)
         }
      }

      input.value = '';                                                       // чисти SEARCH Полето след всяко въвеждане
   }
}