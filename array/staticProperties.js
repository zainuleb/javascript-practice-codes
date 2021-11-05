//Array.from() static method creates a new array from string, returns new array
let word = 'angular';
//console.log(Array.from(word));

//Array.isArray() method determines whether the passed value is an Array.
let arr = [12, 12, 12];
//console.log(Array.isArray(arr), Array.isArray(word));

//The Array.of() method creates a new Array instance from a variable number of arguments, returns new array, maintains argument type
wordTwo = 'yes';
num = 12;
arr = Array.of(word, num, wordTwo);
//console.log(arr);

//at() method takes an integer value and returns the item at that index,
/* let array1 = [5, 12, 8, 130, 44];
let index = 2;
console.log(array1.at(1)); */

//copyWithin() method copies part of an array to another location in the same array and returns it without modifying its length.
let array1 = ['a', 'b', 'c', 'd', 'e'];
//console.log(array1.copyWithin(0, 2, 3));

//entries() method returns a new Array Iterator object that contains the key/value pairs for each index in the array.
let array2 = ['a', 'b', 'c'];
let iterator1 = array2.entries();
/* console.log(iterator1.next().value);
console.log(iterator1.next().value);
console.log(iterator1.next().value);
 */

//fill() method changes all elements in an array to a static value, from a start index to end index
let array3 = [1, 2, 3, 4];
let x = array3.fill(10, 1, 2);
//console.log(x);

//find() takes function, method returns the value of the first element in the provided array
let array4 = [5, 12, 8, 130, 44];
let found = array4.find((element) => element > 10);
//console.log(found);

//findIndex() takes function, method returns the index of the first element in the array
let array5 = [5, 12, 8, 130, 44];
let isLargeNumber = (element) => element > 11;
//console.log(array5.findIndex(isLargeNumber));

//keys() method returns a new Array Iterator object that contains the keys for each index in the array.
let array6 = ['a', 'b', 'c'];
let iterator = array6.keys();

/* for (let key of iterator) {
  console.log(key);
} */

//values() method returns a new array iterator object that contains the values for each index
array1 = ['a', 'b', 'c'];
iterator = array1.values();

/* for (let value of iterator) {
  console.log(value);
} */
