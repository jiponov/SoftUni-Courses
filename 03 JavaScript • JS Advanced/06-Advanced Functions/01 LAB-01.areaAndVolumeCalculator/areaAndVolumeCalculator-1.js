function area() {    // 100/100
    return Math.abs(this.x * this.y);
};


function vol() {
    return Math.abs(this.x * this.y * this.z);
};


function solve(area, vol, input) {
    let coordinates = JSON.parse(input);        // PARSE за да стане масив
    let output = [];

    for (let points of coordinates) {           // за всеки ред от масива push в нов обект като викаме CALL
        output.push({
            area: area.call(points),        // изпълнява се FUNC area и call с точките от input, има вече контекст points към ф-я area заради this
            volume: vol.call(points),        // изпълнява се FUNC vol и call с точките
        });
    }

    return output;                              // за преглед: return JSON.stringify(output)     // или в TERMINAL node .\areaAndVolumeCalculator.js                                                
}


console.log(solve(area, vol, `[
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}
    ]`
));

/*
ОТГОВОР В КОНЗОЛАТА:

[
  { area: 2, volume: 20 },
  { area: 49, volume: 490 },
  { area: 10, volume: 100 }
]

*/