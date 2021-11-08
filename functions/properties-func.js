//toString() method returns a string representing the source code of the function.
function sum(a, b) {
  return a + b;
}

/* console.log(sum.toString());
console.log(Math.abs.toString()); */
/* -------------------------------------------------------------------- */

//Function object's read-only name property indicates the function's name as specified when it was created,
//or it may be either anonymous or ''

const funsc1 = function () {};

const object = {
  func2: function () {},
};

/* console.log(funsc1.name);
console.log(object.func2.name); */
