function cardGame(inputArr) {
    // initialize power multipliers
    let type = {
        'S': 4,
        'H': 3,
        'D': 2,
        'C': 1,
    }

    let strength = {
        '1': 10,
        '2': 2,
        '3': 3,
        '4': 4,
        '5': 5,
        '6': 6,
        '7': 7,
        '8': 8,
        '9': 9,
        'J': 11,
        'Q': 12,
        'K': 13,
        'A': 14,
    }

    // create result collection
    let players = {};

    // for every element of input
    for (let line of inputArr) {
        // -parse element
        // -- split by ': ' -> name and cards as string
        // -- split cards string by ', ' -> array of cards
        let [name, cards] = line.split(': ');
        cards = cards.split(', ');                          //презаписваме масива cards
        //console.log(name, cards);

        // - store in collection
        // -- if person is not recorded, create new Set
        // -- add new cards to person's set
        if (!players.hasOwnProperty(name)) {                 //players.hasOwnProperty(name) == false
            players[name] = new Set();
        }

        for (let card of cards) {
            players[name].add(card);
        }
    }
    //console.log(players)


    // for every entry in result collection
    for (let [name, cards] of Object.entries(players)) {
        //console.log(Object.entries(players))
        //console.log(name, cards)
        let points = 0;
        // - for every card in entry
        // -- calculate power  
        for (let card of cards) {
            let cardPower = strength[card[0]];              // особен случай е 10, защото имаме 3 символа. Но 10 не ни трябва а 1
            let cardType = type[card[card.length - 1]];     // или type[card.slice(-1)]   // последен символ взима

            points += cardPower * cardType;
        }

        // - print name and total power
        console.log(`${name}: ${points}`);
    }

}
cardGame([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
]);
console.log('-------');
// cardGame([
//     'John: 2C, 4H, 9H, AS, QS',
//     'Slav: 3H, 10S, JC, KD, 5S, 10S',
//     'Alex: 6H, 7S, KC, KD, 5S, 10C',
//     'Thomas: QH, QC, JS, JD, JC',
//     'Slav: 6H, 7S, KC, KD, 5S, 10C',
//     'Thomas: QH, QC, JS, JD, JC',
//     'Alex: 6H, 7S, KC, KD, 5S, 10C',
//     'Thomas: QH, QC, JS, JD, JC',
//     'John: JD, JD, JD, JD'
// ]);

/* 
let j = 11;
        let q = 12;
        let k = 13;
        let a = 14;
        let s = 4;
        let h = 3;
        let d = 2;
        let c = 1; 
        
        if (!isNaN(power)) {

                }
                
                */

