//Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

/* A Promise is in one of these states:

pending: initial state, neither fulfilled nor rejected.
fulfilled: meaning that the operation was completed successfully.
rejected: meaning that the operation failed. */

//Promise.all() method takes an iterable of promises as an input, and returns a single Promise that resolves to an array of the results of the input promises.
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

const promises = [promise1, promise2];

/* Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
}); */

//Promise.allSettled() method returns a promise that resolves after all of the given promises have either fulfilled or rejected,
//with an array of objects that each describes the outcome of each promise.
Promise.allSettled(promises).then((results) =>
  results.forEach((result) => console.log(result.status))
);

//Promise.any() takes an iterable of Promise objects. It returns a single promise that resolves as soon as any of the promises
// in the iterable fulfills, with the value of the fulfilled promise.

const promises1 = [promise1, promise2, promise3];

Promise.any(promises1).then((value) => console.log(value));

// expected output: Array [3, 42, "foo"]
