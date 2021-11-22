//__defineGetter__ method binds an object's property to a function to be called when that property is looked up.
var o = {};
o.__defineGetter__('gimmeFive', function () {
  return 5;
});
//console.log(o.gimmeFive); // 5
/* ----------------------------------------------------------------------------------- */

//__defineSetter__ method binds an object's property to a function to be called when an attempt is made to set that property.
var o = {};
o.__defineSetter__('value', function (val) {
  this.anotherValue = val;
});
o.value = 5;
console.log(o.value);
console.log(o.anotherValue);
/* ----------------------------------------------------------------------------------- */

//__lookupGetter__ method returns the function bound as a getter to the specified property.
var obj = {
  get foo() {
    return Math.random() > 0.5 ? 'foo' : 'bar';
  },
};

// Non-standard and deprecated way
obj.__lookupGetter__('foo');

// Standard-compliant way
Object.getOwnPropertyDescriptor(obj, 'foo').get;
