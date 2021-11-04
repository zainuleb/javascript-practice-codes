/* An array literal is a list of zero or more expressions, 
each of which represents an array element, enclosed in square brackets ([]). */

let coffees = ['French Roast', 'Colombian', 'Kona'];
console.log(coffees);

//If you put two commas in a row, the array fills in the value undefined for the unspecified elements.

let fish = ['Lion', , 'Angel'];
console.log(fish[0], fish[1], fish[2]);

let myList = ['home', , 'school', ,];
console.log(myList);
