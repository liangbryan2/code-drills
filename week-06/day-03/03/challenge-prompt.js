/*Write a function called "oddChecker".


Given 2 numbers, "oddChecker" returns true if both numbers are odd

Starter Code :*/
function oddChecker(num1, num2) {
  // code starts here
  if (num1 % 2 !== 0 && num2 % 2 !== 0 ){
    return true;
  }





  // code ends here
}

var output = oddChecker(1, 3);
console.log(output); // --> true

////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////

/*Write a function called "power".

Given a number and an exponent, "power" returns the number taken to that exponent
DO NOT use the built in Math.pow method

Starter Code :*/
function power(num, exponent) {
  // code starts here
  var pow = 1;
  for (var i = 0; i < exponent; i++) {
    pow *= num
  }


  return pow;




  // code ends here
}

var output = power(2, 3);
console.log(output); // --> 8

////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////

/*Write a function called "halfsquareRoot".

Given a number, "halfsquareRoot" returns its square root divided by two

Starter Code :*/
function halfsquareRoot(num) {
  // code starts here
  var sqrt;
  for (var i = 0; i < num; i++) {
    if (i * i === num) {
      sqrt = i;
    }
  }
  

  return sqrt/2;



  // code ends here
}
var output = halfsquareRoot(121);
console.log(output); // --> 5.5
