'use strict';

var factory = function(func) {
    var obj = {};
    func.call(obj);
    return obj;
};

var cards = function() {
    var cards = ['A', 'B', 'C'];

    this.addCard = function(card) {
        cards.push(card);
    }

    this.getCards = function() {
        return cards;
    }
};

var newCards = factory(cards);
var otherCards = factory(cards);

console.log(newCards.getCards(), 'newCards: Should be [A, B, C]');
console.log('Add a new card `D` to newCards');
newCards.addCard('D');
console.log(otherCards.getCards(), 'otherCards: Should be [A, B, C]'); // [A, B, C]
console.log('Add a new card `X` to otherCards');
otherCards.addCard('X');
console.log(newCards.getCards(), 'newCards: Should be [A, B, C, D]');
console.log(otherCards.getCards(), 'otherCards: Should be [A, B, C, X]');
