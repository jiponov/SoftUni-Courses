function cityTaxes(name, population, treasury) {    // 100/100

    // create city collection
    const cityInfo = {
        name,
        population: Number(population),
        treasury: Number(treasury),
        taxRate: 10,

        collectTaxes() {
            this.treasury += this.population * this.taxRate
        },

        applyGrowth(percent) {
            this.population *= (100 + percent) / 100
        },

        applyRecession(percent) {
            this.treasury *= (100 - percent) / 100
        }
    };

    // return the city collection 
    return cityInfo;
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
