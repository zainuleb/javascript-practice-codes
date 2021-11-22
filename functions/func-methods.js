//apply() method calls a function with a given this value, and arguments provided as an array (or an array-like object).

/* const numbers = [5, 6, 2, 3, 7];
const max = Math.max.apply(null, numbers);
/* console.log(max); */

/* const min = Math.min.apply(null, numbers); */
/* console.log(min); */

var addto = function (a, b, c) {
  console.log(a, b, c, this.num);
  return a + b + c + this.num;
};

const foo = (a, b) => {
  /*   console.log(this.num); */
  return a + b;
};

var obj = { num: 12 };
arr = [1, 2, 3];

const max1 = addto.call(obj, arr);
/* const max2 = foo.apply(obj, arr); */
/* 
console.log(max1); */

//call() method calls a function with a given this value and arguments provided individually.
