// Object.assign() method copies all enumerable own properties from one or more source objects to a target object.

const { letterSpacing } = require('@mui/system');

//Returns union between objects/ objects concant
const target = { a: 1, b: 6 };
const source = { b: 3, c: 5 };
const returnedTarget = Object.assign(target, source);

// console.log(returnedTarget);

/* ----------------------------------------------------------------------------------- */

//Object.create() method creates a new object, using an existing object as the prototype of the newly created object.
const person = {
  isHuman: false,
  printIntroduction: function () {
    console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
  },
};
const me = Object.create(person);

me.name = 'Matthew'; // "name" is a property set on "me", but not on "person"
me.isHuman = true; // inherited properties can be overwritten

//me.printIntroduction();
/* ----------------------------------------------------------------------------------- */

//Object.defineProperty() defines a new property directly on an object, or modifies an existing property on an object
let object1 = {};

Object.defineProperty(object1, 'property1', {
  value: 42,
  writable: false,
});

object1.property1 = 77;
// throws an error in strict mode

//console.log(object1.property1);
/* ----------------------------------------------------------------------------------- */

//Object.defineProperties() method defines new or modifies existing properties directly on an object, returning the object.
object1 = {};

Object.defineProperties(object1, {
  property1: {
    value: 42,
    writable: true,
  },
  property2: { value: 43, writable: true },
});

//console.log(object1.property1, object1.property2);
/* ----------------------------------------------------------------------------------- */

//Object.entries() method returns an array of a given object's own enumerable string-keyed property [key, value] pairs.
object1 = {
  a: 'somestring',
  b: 42,
};

/* for (const [key, value] of Object.entries(object1)) {
  console.log(`${key}: ${value}`);
} */

/* ----------------------------------------------------------------------------------- */

//Object.freeze() method freezes an object. A frozen object can no longer be changed;
//freezing an object prevents new properties from being added to it,

obj = {
  prop: 4,
};
Object.defineProperty(obj, 'hamza', {
  value: 40,
  writable: false,
});

Object.freeze(obj);
obj.prop = 33;
//console.log(obj.prop);
/* ----------------------------------------------------------------------------------- */

//Object.fromEntries() method transforms a list of key-value pairs into an object.

const entries = new Map([
  ['foo', 'bar'],
  ['baz', 42],
]);

let objx = Object.fromEntries(entries);
//console.log(objx);
/* ----------------------------------------------------------------------------------- */

//Object.getOwnPropertyDescriptor() method returns an object describing the configuration of a specific property on a given object
objx = {
  property1: 42,
};

const descriptor1 = Object.getOwnPropertyDescriptor(objx, 'property1');

/* console.log(descriptor1.configurable);
console.log(descriptor1.value); */
/* ----------------------------------------------------------------------------------- */

//Object.getOwnPropertyNames() method returns an array of all properties (including non-enumerable properties)

objx = {
  xa: 1,
  xb: 2,
  xc: 3,
};
//console.log(Object.getOwnPropertyNames(objx));
/* ----------------------------------------------------------------------------------- */

//Object.getOwnPropertySymbols() method returns an array of all symbol properties found directly upon a given object.
objx = {};
const a = Symbol('a');
const b = Symbol.for('b');

objx[a] = 'localSymbol';
objx[b] = 'globalSymbol';
const objectSymbols = Object.getOwnPropertySymbols(objx);
//console.log(objectSymbols);
/* ----------------------------------------------------------------------------------- */

//Object.getPrototypeOf() method returns the prototype (i.e. the value of the internal [[Prototype]] property) of the specified object.letterSpacing
prototype1 = {};
objx = Object.create(prototype1);

//console.log(Object.getPrototypeOf(objx) === prototype1);
/* ----------------------------------------------------------------------------------- */

prototype1 = {};
objx = Object.create(prototype1);

//console.log(Object.getPrototypeOf(objx) === prototype1);
/* ----------------------------------------------------------------------------------- */

//Object.is() method determines whether two values are the same value.
const n = 4;

//console.log(Object.is(0, -0));
//console.log(Object.is(+0, -0));
//console.log(Object.is(-0, -0));
//console.log(0n, -0n);
/* ----------------------------------------------------------------------------------- */

//Object.isExtensible() method determines if an object is extensible (whether it can have new properties added to it).
objx = {};

//console.log(Object.isExtensible(objx));

/* Object.freeze(objx);
console.log(Object.isExtensible(objx));
 */
/* ----------------------------------------------------------------------------------- */

// Object.isFrozen()  determines if an object is frozen.
/* objx = {
  property1: 42,
};
console.log(Object.isFrozen(objx));

Object.freeze(objx);
console.log(Object.isFrozen(objx)); */
/* ----------------------------------------------------------------------------------- */

//Object.isSealed() method determines if an object is sealed.
objx = {
  property1: 42,
};

//console.log(Object.isSealed(objx));

/* Object.seal(objx);
console.log(Object.isSealed(objx));
objx.property1 = 2;
console.log(objx.property1); */
/* ----------------------------------------------------------------------------------- */

//Object.keys() method returns an array of a given object's own enumerable property names,
//iterated in the same order that a normal loop would.

objx = {
  a: 'somestring',
  b: 42,
  c: false,
};

//console.log(Object.keys(objx));
/* ----------------------------------------------------------------------------------- */

//Object.preventExtensions() method prevents new properties from ever being added to an object
objx = {};

Object.preventExtensions(objx);

/* try {
  Object.defineProperty(objx, 'property1', {
    value: 42,
  });
} catch (e) {
  console.log(e);
}
 */
/* ----------------------------------------------------------------------------------- */

//Object.seal() method seals an object, preventing new properties from being added to it and marking all existing properties as non-configurable.
/* objx = {
  property1: 42,
};

Object.seal(objx);
objx.property1 = 33;
console.log(objx.property1);

delete objx.property1; // cannot delete when sealed
console.log(objx.property1); */
/* ----------------------------------------------------------------------------------- */

//Object.values() method returns an array of a given object's own enumerable property values, in the same order as that provided by a for...in loop.
objx = {
  a: 'somestring',
  b: 42,
  c: false,
};

console.log(Object.values(objx));
// expected output: Array ["somestring", 42, false]
