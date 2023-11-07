function playingCards(face, suit) {         // 100/100

    const facesValid = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

    const suitsValid = {
        S: '\u2660',    // Spades (♠)
        H: '\u2665',    // Hearts (♥)
        D: '\u2666',    // Diamonds (♦)
        C: '\u2663'     // Clubs (♣)
    };


    if (face != face.toUpperCase() || suit != suit.toUpperCase()) {
        throw new Error('Not uppercase');
    }

    if (!facesValid.includes(face) || !suitsValid[suit]) {          // if (!suitsValid.hasOwnProperty(suit))
        throw new Error('Invalid face or suit');                    // OR:     throw new Error();
    }


    let card = {
        face,
        suit,
        toString() {                                                // OR:   toString: () => `${face}${suitsValid[suit]}`
            return this.face + suitsValid[this.suit];               // The object also needs to have a toString() method that prints the card’s face and suit as a string. 
        }                                                           // toString() method of the returned object must return a string.
    };

    return card;
}


let result = playingCards('A', 'S');                 // closure
console.log(result.toString());                      // console.log за да видим резултата локално в конзолата

// OR check with this:      console.log(playingCards('A', 'S').toString());


// на променлива result (която държи функцията като closure цялата)
// слагаме точка и метода (който е функция toString())

/*
console.log(playingCards('A', 'S').toString());             // A♠
console.log(playingCards('10', 'H').toString());            // 10♥
console.log(playingCards('1', 'C').toString());             // Error
*/