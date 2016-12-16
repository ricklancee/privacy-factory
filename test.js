import test from 'ava';
import factory from './factory';

test('it should be able to keep data private', t => {
  const fn = function() {
    var A = 'A';

    this.getA = function() {
        return A;
    };

    this.setA = function(x) {
        A = x;
    };
  };

  const func1 = factory().create(fn);
  const func2 = factory().create(fn);

  func1.setA('B');
  t.is(func1.getA(), 'B');
  t.is(func2.getA(), 'A');
});

test('it should be able to compose two functions and keep data private', t => {
  const funcA = function() {
    let privateVar = 'A';

    this.getFuncAVar = function() {
      return privateVar;
    };
  };

  const funcB = function() {
    let privateVar = 'B';

    this.getFuncBVar = function() {
      return privateVar;
    };
  };


  const funcA1 = factory().create(funcA);
  const funcB1 = factory().create(funcB);

  const composed = factory().compose(funcA1, funcB1, {someobject: 'foo'});

  t.is(composed.getFuncBVar(), 'B');
  t.is(composed.getFuncAVar(), 'A');
  t.is(composed.someobject, 'foo');
});
