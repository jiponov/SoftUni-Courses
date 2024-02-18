function hellsKitchen() {     // 100/100
   document.querySelector('#btnSend').addEventListener('click', onClick);


   function onClick() {

      let input = JSON.parse(document.querySelector('#inputs textarea').value);
      let avgSalary = 0;
      let totalSalary = 0;
      let currentAvgSalary = 0;
      let bestNameRestaurant = '';
      let output = {};
      //console.log(input);

      for (let line of input) {                                // създаване на йерархия

         let restaurantInfo = line.split(' - ');
         let restaurantName = restaurantInfo[0];
         let workersData = restaurantInfo[1].split(', ');
         //console.log(line)
         //console.log(restaurantInfo);
         //console.log(workersData);
         for (let worker of workersData) {
            let [name, salary] = worker.split(' ');
            if (!output.hasOwnProperty(restaurantName)) {
               output[restaurantName] = {};
            }

            if (output.hasOwnProperty(restaurantName)) {          // If there is a restaurant in the input array that is added more than once, you need to add new workers to the old ones and update the values of the average salary and the best salary.
               output[restaurantName][name] = Number(salary);
            }
         }
      }
      //console.log(output)

      let entries = Object.entries(output);                      // заплати трупане
      //console.log(entries)
      for (let entry of entries) {
         // ['PizzaHut', {...}]
         let key = entry[0];
         let values = Object.entries(entry[1]);
         //console.log(values);

         for (let [name, salary] of values) {
            totalSalary += salary;
         }

         avgSalary = totalSalary / values.length;
         if (avgSalary > currentAvgSalary) {             // If two restaurants have the same average salary the best restaurant is the first one added. ЗНАК >
            currentAvgSalary = avgSalary;
            bestNameRestaurant = key;                    // set ТОП РЕСТОРАНТА
            totalSalary = 0;                             // Нулираме на всяко едно заведение на хората заплатите
         }
      }

      console.log(output);
      let result = Object.entries(output[bestNameRestaurant]).sort((a, b) => b[1] - a[1])     // sort по заплати от ТОП ресторанта      // The best restaurant's workers should be sorted by their salaries in descending order.
      console.log(result)

      let print = '';
      result.forEach(x => print += `Name: ${x[0]} With Salary: ${x[1]} `);          // Display all workers in the best restaurant with their salaries.

      document.querySelector('#bestRestaurant p').textContent = `Name: ${bestNameRestaurant} Average Salary: ${currentAvgSalary.toFixed(2)} Best Salary: ${(result[0][1]).toFixed(2)}`;
      document.querySelector('#workers p').textContent = print;
   }
}


/* INPUT ARRAY OF STRINGS - FOR THE BROWSER INPUT FIELD

["PizzaHut - Peter 500, George 300, Mark 800",
"TheLake - Bob 1300, Joe 780, Jane 660"]

*/