
// Instructions:
// each `describe` method is a test suite for each example.
// change `xdescribe` to `describe` as you progress to get a certain
// test suite running.

// Test in your console by running `npm run watch`.


// Build a `makeCounter` function that accepts an initial count,
// and returns an object with an `inc` and a `dec` function:
describe('Exercise 1: makeCounter', () => {

  // TODO: write your implementation of makeCounter here
  const makeCounter = () => () => ({});

  // TODO: test your implementation of makeCounter here
  test('should work', () => {

    const obj1 = makeCounter(10);
    expect(obj1.inc()).toEqual(11);
    expect(obj1.dec()).toEqual(10);

    const obj2 = makeCounter(3);
    expect(obj1.inc()).toEqual(4);
    expect(obj1.dec()).toEqual(3);
  })
});


// Helpful resource: https://facebook.github.io/jest/docs/mock-functions.html#mock-implementations


// Build a `debounce` function that accepts a function and a number
// `n` (of milliseconds), and returns a new debounced version of
// the passed function that will postpone its execution until after
// n milliseconds have elapsed since the last time it was invoked.
xdescribe('Exercise 2: debounce', () => {

  // TODO: write your implementation of debounce here
  const debounce = fn => fn;

  // TODO: test your implementation of debounce here
  test('should work', () => {

    expect(true).toEqual(true);
  })
});

// Build a `throttle` function that accepts a function and a number
// `n` (of milliseconds), and returns a new throttled version of the
// passed function that, when invoked repeatedly, will only actually
// call the original function at most once per every n milliseconds.
xdescribe('Exercise 3: throttle', () => {

  // TODO: write your implementation of throttle here
  const throttle = fn => fn;

  // TODO: test your implementation of throttle here
  test('should work', () => {

    expect(true).toEqual(true);
  })
});


// Build a `PubSub` class that has two methods: `subscribe` and `publish`.
// `subscribe` accepts a callback function that will be invoked every time
// `publish` is called, with the same arguments passed in to the callback
// that were passed into `publish`.
xdescribe('Exercise 4: PubSub class', () => {

  // TODO: implement
  class PubSub {

  }

  // TODO: test
  test('should work', () => {

    expect(true).toEqual(true);
  })
});


// Build a `pubsub` function that returns an object with the same abilities
// as the `PubSub` class in the previous example
xdescribe('Exercise 5: pubsub module', () => {

  // TODO: implement
  const pubsub = () => {};

  // TODO: test
  test('should work', () => {

    expect(true).toEqual(true);
  })
});


// utility function
const defer = (n, val) => new Promise(r => setTimeout(() => r(val), n));

// Helpful resources: https://facebook.github.io/jest/docs/asynchronous.html#content

// Build an `all` function that accepts an array of promises, and resolves with
// an array of all of the resolved values of the promises when all of the promises
// have resolved
xdescribe('Exercise 6: Promise all function', () => {

  // TODO: implement
  const all = (promises) => {};

  // TODO: test
  test('should work', () => {

    expect(true).toEqual(true);
  })
});


// Build a `promisePool` function that accepts a `maxConcurrent` paramenter and
// returns a function that expects a “lazy promise” (or a function that makes a
// promise), and returns a promise that will resolve with the result of that
// promise, but is guaranteed to have at most `maxConcurrent` promises of the
// “pool” in a pending state at any given time
xdescribe('Exercise 7: promisePool', () => {

  // TODO: implement
  const promisePool = (maxConcurrent) => {};

  // TODO: test
  test('should work', () => {

    expect(true).toEqual(true);
  })
});
