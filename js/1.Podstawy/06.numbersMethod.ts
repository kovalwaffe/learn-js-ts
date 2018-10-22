var x = 123;
x.toString();            // returns 123 from variable x

//toExponential() returns a string, with a number rounded and written using exponential notatio

var x = 9.656;
x.toExponential(2);     // returns 9.66e+0
x.toExponential(4);     // returns 9.6560e+0
x.toExponential(6);     // returns 9.656000e+0

// toFixed() returns a string, with the number written with a specified number of decimals:
var x = 9.656;
x.toFixed(0);           // returns 10
x.toFixed(2);           // returns 9.66
x.toFixed(4);           // returns 9.6560
x.toFixed(6);           // returns 9.656000

// toPrecision()
var x = 9.656;
x.toPrecision();        // returns 9.656
x.toPrecision(2);       // returns 9.7
x.toPrecision(4);       // returns 9.656
x.toPrecision(6);       // returns 9.65600

// Number()	Returns a number, converted from its argument.
// parseFloat()	Parses its argument and returns a floating point number
// parseInt()	Parses its argument and returns an integer

// Number(new Date("2017-09-30"));    // returns 1506729600000

// Number Properties
// Property	Description
// MAX_VALUE	Returns the largest number possible in JavaScript
// MIN_VALUE	Returns the smallest number possible in JavaScript
// POSITIVE_INFINITY	Represents infinity (returned on overflow)
// NEGATIVE_INFINITY	Represents negative infinity (returned on overflow)
// NaN	Represents a "Not-a-Number" value