//An object literal is a list of zero or more pairs of property names
//and associated values of an object, enclosed in curly braces ({}).

var sales = 'Toyota';

function carTypes(name) {
  if (name === 'Honda') {
    return name;
  } else {
    return "Sorry, we don't sell " + name + '.';
  }
}

var car = { myCar: 'Saturn', getCar: carTypes('Honda'), special: sales };

console.log(car.myCar); // Saturn
console.log(car.getCar); // Honda
console.log(car.special); // Toyota

var unusualPropertyNames = {
  '': 'An empty string',
  '!': 'Bang!',
};

console.log(unusualPropertyNames['']); // An empty string
console.log(unusualPropertyNames['!']); // Bang!
