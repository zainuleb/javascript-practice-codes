//Length
let fruits = ['Apple', 'Banana'];
/* console.log('Length', fruits.length); */

//For Each: Loop over an Array, returns undefined
/* const x = fruits.forEach(function (item, index, array) {
  console.log(item, index);
}); */

//Push: Add an item to the end of an Array, returns same array with added value,
//Will return length when assigned to a value
let newLength = fruits.push('Orange', 'Apfel');
/* console.log(newLength, fruits); */

//Pop: Remove an item from the end of an Array, will return last item in stack
let last = fruits.pop(); // remove Orange (from the end)
//console.log(last, fruits);

//Shift: Remove an item from the beginning of an Array, returns the removed element from array
let first = fruits.shift(); // remove Apple from the front
//console.log(first, fruits);

//Shift: Add an item to the beginning of an Array, returns length of array
newLength = fruits.unshift('Strawberry', 'Bannaasss'); // add to the front
//console.log(newLength);

//indexOf: Find the index of an item in the Array, returns index of element in array
let pos = fruits.indexOf('Bannaasss');
//console.log(pos);

//Splice: Add/Remove an items by index position, number of additional indexes for removal and 0 for addition
/* console.log('Original Array', fruits);
let removedItem = fruits.splice(2, 0, 'Kela'); // this is how to remove an item
console.log(removedItem, fruits); */

//Slice: Copy an Array
/* console.log('Original Array', fruits);
let shallowCopy = fruits.slice(); // this is how to make a copy
console.log(shallowCopy, fruits); */

//Join: Joins elements of array into string
const elements = ['Fire', 'Air', 'Water'];
const newElement = elements.join();
//console.log(newElement, typeof newElement, elements);
