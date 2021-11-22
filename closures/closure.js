//closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment).

/* Lexical scoping */
function init() {
  var name = 'Mozilla';
  function displayName() {
    console.log(name);
  }
  displayName();
}
init();

/* Closure */
function makeFunc() {
  var name = 'Waqas Gandu';
  function displayName() {
    console.log(name);
  }
  return displayName;
}

var myFunc = makeFunc();
myFunc();
