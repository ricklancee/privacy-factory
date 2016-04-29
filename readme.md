# A javacript privacy factory

Instead of using `new Function()` use a factory to create new instances that ensure data privacy. Allows to compose different objects toghether. "Favor  composition over inheritance." 


### Usage

```js
var func = function() {
    var A = 'A';

    this.getA = function() {
        return A;
    };

    this.setA = function(x) {
        a = x;
    };
};

var func1 = factory().create(func);
var func2 = factory().create(func);

func1.setA('B');
func1.getA(); // B
func2.getA(); // A
```

Compose two different object.
For instance you can easily add Backbone events to any function.

```js
var funcA = function() {
    var privateVar = 'A';

    this.getFuncAVar = function() {
        return privateVar;
    };
};

var funcB = function() {
    var privateVar = 'B';

    this.getFuncBVar = function() {
        return privateVar;
    };
};

var funcA1 = factory().create(funcA);
var funcB1 = factory().create(funcB);

var composed = factory().compose(funcA1, funcB1, Backbone.Events);

composed.getFuncBVar(); // 'B';
composed.getFuncAVar(); // 'A';

```

