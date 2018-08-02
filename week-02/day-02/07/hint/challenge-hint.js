// declare a variable to store the user input and set it to an empty array for now
var userInput = [];

// create a string of all the valid inputs for our validation logic to check against
var string = "+-*/=c1234567890";


// ==================== Evaluation Function ====================
//
// create function that takes in an array and evaluates that array as a mathematical function
// Feel free to come back to this function later if you want to. We will not be using this
// immediately.
//
// =============================================================
function math(array) {

  // declare 3 variables, one for the first number, one for the second, and one for the operator
  // set the variables for the numbers to be an empty string for now
  var num1 = "";
  var num2 = "";
  var operator;

  // iterate through the array from the argument
  for (var i = 0; i < array.length; i++) {


    // if the operator is already defined
    // not being defined is a "falsey" value and will evaluate to false in the if statement
    // if operator has a value, it will evaluate to true
    if (operator) {

      // append the current element to the end of the second number
      num2 = num2 + array[i];
    }
    // if the operator hasn't already been defined
    else {

      // check if the the current element is an operator
      if (array[i] === "+" || array[i] === "-" || array[i] === "*" || array[i] === "/") {

        // if the current element is an operator, set the value of our operator variable to
        // be the current element
        operator = array[i];
      }
      // if the current element is not an operator
      else {

        // append it to the end of the first number
        num1 = num1 + array[i];
      }
    }
  }
  // after we've iterated through the array, parse the first and 
  // second numbers into integers from strings
  num1 = parseInt(num1);
  num2 = parseInt(num2);

  // then, check if the operator is a '+' sign
  if (operator === "+") {

    // if the operator is a '+' sign, return the value of the first number added to the second number
    return num1 + num2;
  }

  // if the operator isn't a '+' sign, check if the operator is a '-' sign
  else if (operator === "-") {

    // if the operator is a '-' sign, return the value of the first number subtracted from the second number
    return num1 - num2;
  }

  // if the operator isn't a '-' sign, check if the operator is a '*' sign
  else if (operator === "*") {

    // if the operator is a '*' sign, return the value of the first number multiplied by the second number
    return num1 * num2;
  }

  // if the operator isn't a '*' sign, check if the operator is a '/' sign
  else if (operator === "/") {

    // if the operator is a '/' sign, return the value of the first number divided by the second number
    return num1 / num2;
  }
}



// ==================== Event Listener ====================
//
// Create an event listener that listens to user key presses
//
// ========================================================
document.onkeyup = function (event) {

  // check to make sure the user pressed a valid button (check the input against the array we made)
  if (string.includes(event.key)) {

    // if the input was valid, check if it was the letter 'c'
    if (event.key === "c") {

      // if it was 'c', set the expression array back to an empty string and clear the two output
      // areas on the webpage
      userInput = [];
      document.getElementById("output").textContent = "";
    }


    // if the input wasn't the letter 'c', check if it was an '='
    else if (event.key === "=") {

      // if it was an '=', send the user expression into our array expression evaluator function
      var result = math(userInput);

      // then, output the results of that function into the results area of our webpage
      document.getElementById("output").textContent = result;
    }

    // if the input wasn't an '=', check whether it was an operator
    else if (event.key === "+" || event.key === "-" || event.key === "*" || event.key === "/") {

      // if it was an operator, check whether an operator already exists in the user expression array
      if (userInput.includes("+") || userInput.includes("-") || userInput.includes("*") ||userInput.includes("/")) {

        // if it already exists, output a message to the results area on the webpage telling the user
        // that they already input an operator
        document.getElementById("output").textContent = "You already input an operator.";
      }

      // if there wasn't already an operator, add the input to the expression
      else {
        userInput.push(event.key);
      }
    }

    // if it wasn't an operator, then it must be a number because we've gone through all the other
    // valid inputs, so store that number into the expression array
    else {
      userInput.push(event.key);
    }
  }
  // if the input wasn't valid, output an error message to the results area on the webpage
  else {
    document.getElementById("output").textContent = "Your input is not valid.";
  }


  // finally, outside the 'if-else' statement, set the textContent of the user expression div
  // to be our expression array
  document.getElementById("user-input").textContent = userInput;

}