//concat() method is used to merge two or more arrays. Returns new array
let array1 = ['a', 'b', 'c'];
let array2 = ['d', 'e', 'f'];
let array3 = array1.concat(array2);
//console.log(array3);

//every() takes function, method tests whether all elements in the array pass the test implemented by the provided function.
//It returns a Boolean value.
const isBelowThreshold = (currentValue) => currentValue < 40;
array1 = [1, 30, 39, 29, 10, 13, 41];
//console.log(array1.every(isBelowThreshold));

//filter() method creates a new array with all elements
const words = [
  'spray',
  'limit',
  'elite',
  'exuberant',
  'destruction',
  'present',
];
const result = words.filter((word) => word.length > 6);
//console.log(result);

//flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
const arr2 = [0, 1, 2, [[[3, 4]]]];
//console.log(arr2.flat(2));

//reduce() method executes a user-supplied “reducer” callback function on each element of the array,
// passing in the return value from the calculation on the preceding element.

array1 = [1, 2, 3, 4];
const reducer = (previousValue, currentValue) => previousValue - currentValue;
//console.log(array1.reduce(reducer));

//reduceRight() method applies a function against an accumulator and each value of the array
//(from right-to-left) to reduce it to a single value.
array1 = [
  [0, 1],
  [3, [2]],
  [2, 3],
  [4, 5],
].reduceRight((accumulator, currentValue) => accumulator.concat(currentValue));
//console.log(array1);

//sort() method sorts the elements of an array in place and returns the sorted array.
const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
//console.log(months);

//some() method tests whether at least one element in the array passes the test implemented
const array = [1, 2, 3, 4, 5];
// checks whether an element is even
const even = (element) => element % 2 === 0;
//console.log(array.some(even));

//toLocaleString() method returns a string representing the elements of the array.
array1 = [1, 'a', new Date('21 Dec 1997 14:12:00 UTC')];
const localeString = array1.toLocaleString('en', { timeZone: 'UTC' });

console.log(localeString);
