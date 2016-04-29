
var cards = function() {
    var cards = ['A', 'B', 'C'];

    this.addCard = function(card) {
        cards.push(card);
    }

    this.getCards = function() {
        return cards;
    }
};

var otherThing = function() {
    var privateVar = 'foo';

    this.getPrivateVar = function() {
        return privateVar;
    }
};

var newCards = factory().create(cards);
var someOtherThing = factory().create(otherThing);
console.log(newCards);
console.log(someOtherThing);
console.log(someOtherThing.getPrivateVar()); // foo
console.log(newCards.getCards()); // a b c

var composedObj = factory().compose(newCards, someOtherThing, Backbone.Events);
console.log(composedObj);
console.log(composedObj.getPrivateVar()); // foo
console.log(composedObj.getCards()); // a b c
