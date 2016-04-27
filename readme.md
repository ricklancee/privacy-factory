# A javacript privacy factory

Instead of using `new Function()` use a factory to create new instances that ensure data privacy. Allows to compose different objects toghether. "Favor  composition over inheritance." 


### Usage

```js
var func = function() {
    var privateVar = 'A';

    this.getA = function() {

    }
}

var func1 = factory().create(func);
var func2 = factory().create(func);
```

Compose two different object.

```js
var funcA = function() {
    var privateVar = 'A';

    this.getFuncAVar = function() {
        return privateVar;
    };
}

var funcB = function() {
    var privateVar = 'B';

    this.getFuncBVar = function() {
        return privateVar;
    };
}

var funcA1 = factory().create(funcA);
var funcB1 = factory().create(funcB);

var composed = factory().compose(funcA1, funcB1);

```

