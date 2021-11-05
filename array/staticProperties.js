//Array.from() static method creates a new array from string, returns new array
const word = 'angular';
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
/* const array1 = [5, 12, 8, 130, 44];
let index = 2;
console.log(array1.at(1)); */

//copyWithin() method copies part of an array to another location in the same array and returns it without modifying its length.
const array1 = ['a', 'b', 'c', 'd', 'e'];
//console.log(array1.copyWithin(0, 2, 3));

//entries() method returns a new Array Iterator object that contains the key/value pairs for each index in the array.
const array2 = ['a', 'b', 'c'];
const iterator1 = array2.entries();
/* console.log(iterator1.next().value);
console.log(iterator1.next().value);
console.log(iterator1.next().value);
 */

//fill() method changes all elements in an array to a static value, from a start index to end index
/* const array2 = [1, 2, 3, 4];
console.log(array2.fill(0, 2, 4)); */
