// Defining the card constructor function
//
// -------------------- Your Code Here --------------------
var Card = function (value) {
    this.value = value;
    this.print = function () {
        console.log('Card value: ', this.value);
    }
}





// --------------------- End Code Area --------------------



// Defining the deck constructor function
//
// -------------------- Your Code Here --------------------
var Deck = function (initial) {
    this.cards = initial;
    this.count = function () {
        return this.cards.length;
    };
    this.shuffle = function () {
        var currentIndex = this.cards.length;
        var temp;
        var randomIndex;
        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temp = this.cards[currentIndex];
            this.cards[currentIndex] = this.cards[randomIndex];
            this.cards[randomIndex] = temp;
        }
    };
    this.draw = function () {
        return this.cards.shift();
    };
    this.add = function (card) {
        this.cards.push(card);
        this.shuffle();
    };
}





// --------------------- End Code Area --------------------



// Export your two constructor functions
//
// -------------------- Your Code Here --------------------
module.exports.Card = Card;
module.exports.Deck = Deck;



// --------------------- End Code Area --------------------