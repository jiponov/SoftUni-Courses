function cityTaxes(name, population, treasury) {    // 100/100

    const result = {
        name: name,
        population: population,
        treasury: treasury,
        taxRate: 10,
        collectTaxes() {
            this.treasury += Math.floor(this.population * this.taxRate);
        },
        applyGrowth(percent) {
            this.population += Math.floor(this.population * percent / 100);
        },
        applyRecession(percent) {
            this.treasury -= Math.floor(this.treasury * percent / 100);
        }
    }

    return result;
}

const city = cityTaxes('Tortuga', 7000, 15000);



city.collectTaxes();
console.log(city.treasury);
// 85000

city.applyGrowth(5);
console.log(city.population);
// 7350

city.applyRecession(10);
console.log(city.treasury);
// 76500
