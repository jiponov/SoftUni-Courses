function search() {    // 100/100
   let searchElement = document.getElementById('searchText');
   let townsElement = document.querySelectorAll('ul#towns li');        // document.getElementById('towns');
   let resultElement = document.getElementById('result');

   let userWord = searchElement.value;
   let townsAsArray = Array.from(townsElement);
   let counter = 0;

   for (let town of townsAsArray) {
      if (town.textContent.includes(userWord) && userWord != '') {
         counter++;
         town.style.fontWeight = 'bold';
         town.style.textDecoration = 'underline';
      } else {
         town.style.fontWeight = 'normal';
         town.style.textDecoration = 'none';
      }
   }

   resultElement.textContent = `${counter} matches found`;

   //console.log(resultElement.textContent);

   //console.log(townsElement)
   //console.log(townsAsArray)
}
