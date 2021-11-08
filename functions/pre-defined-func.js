//eval() function evaluates JavaScript code represented as a string.
/* console.log(eval('2 * 2'));
console.log(eval(new String('2 + 2')));
console.log(eval('2 + 2') === eval('4'));
console.log(eval('2 + 2') === eval(new String('2 + 2'))); */
/* -------------------------------------------------------------------- */

//isFinite() function determines whether the passed value is a finite number.
function div(x) {
  if (isFinite(1000 / x)) {
    return 'Number is NOT Infinity.';
  }
  return 'Number is Infinity!';
}

/* console.log(div(0));
console.log(div(1));
 */
/* -------------------------------------------------------------------- */

//isNaN() function determines whether a value is NaN or not.
function milliseconds(x) {
  if (isNaN(x)) {
    return 'Not a Number!';
  }
  return x * 1000;
}

/* console.log(milliseconds('100K'));
console.log(milliseconds('0.0314E+2')); */

/* -------------------------------------------------------------------- */

//parseFloat() function parses an argument (converting it to a string first if needed)
function circumference(r) {
  return parseFloat(r) * 2.0 * Math.PI;
}

/* console.log(circumference(4.567));
console.log(circumference('4.567abcdefgh'));
console.log(circumference('abcdefgh')); */
/* -------------------------------------------------------------------- */

//parseInt() function parses a string argument and returns an integer of the specified radix
function roughScale(x, base) {
  const parsed = parseInt(x, base);
  if (isNaN(parsed)) {
    return 0;
  }
  return parsed * 100;
}

/* console.log(roughScale(' 0xF', 16));
console.log(roughScale('31', 2)); */
/* -------------------------------------------------------------------- */

//decodeURI() function decodes a Uniform Resource Identifier (URI) previously created by encodeURI() or by a similar routine.

const uri = 'https://developers.remotebase.com/finishSignUp';
const encoded = encodeURI(uri);
console.log(encoded);

try {
  console.log(decodeURI(encoded));
} catch (e) {
  // catches a malformed URI
  console.error(e);
}

/* -------------------------------------------------------------------- */
/* -------------------------------------------------------------------- */
/* -------------------------------------------------------------------- */
/* -------------------------------------------------------------------- */
/* -------------------------------------------------------------------- */
/* -------------------------------------------------------------------- */
/* -------------------------------------------------------------------- */
