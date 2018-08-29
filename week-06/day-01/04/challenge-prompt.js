// Long Division

// This is the divide function. It takes in a dividend and a divisor 
// and returns the quotient from dividing the dividend by the divisor
function divide (dividend, divisor) {
// -------------------- Your Code Here --------------------
if (divisor > dividend) {
    return console.log(`${divisor} is greater than ${dividend}. You can't divide them.`);
}
var num = dividend;
var quotient = 0;
while(num >= divisor) {
    num -= divisor;
    quotient++;
}

console.log(`The quotient is ${quotient} with a remainder of ${num}`);
return quotient;

// --------------------- End Code Area --------------------
}

// Exporting the divide function for use in the test file.
module.exports = divide;