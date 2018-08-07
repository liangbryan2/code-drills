// Day 05
// Activity 05


// This is our password strength checker function. Refer to the README.md for
// instructions on the behavior.
function checkStrength(password) {
  // ----- Your code goes here -----


  // check if the password is long enough and store that in a boolean variable
  var enoughLength = false;
  var specialCharacters = "<>@!#$%^&*()_+[]{}?:;|'\"\\,./~`-=";
  var containsSpecial = false;
  var numbers = "1234567890";
  var containsNumbers = false;
  var alphabet = "abcdefghijklmnopqrstuvwxyz";
  var containsLetter = false;

  for (var i = 0; i < password.length; i++) {
    if (password.length > 6) {
      enoughLength = true;
    }

    // check if the password contains at least one special character and store that in a boolean variable
    if (specialCharacters.includes(password[i])) {
      containsSpecial = true;
    }


    // check if the password contains at least one number and store that in a boolean variable
    if (numbers.includes(password[i])) {
      containsNumbers = true;
    }

    // check if the password contains at least one letter and store that in a boolean variable
    if (alphabet.includes(password[i])) {
      containsLetter = true;
    }

  }
  // if the password is long enough, contains a number, contains a letter, and contains a special character,
  // return that the password is very strong
  if (enoughLength && containsLetter && containsNumbers && containsSpecial) {
    return "Your password is very strong";
  }


  // if the password is long enough, contains a number, contains a letter, and doesn't contain a special character, 
  // return that the password is strong
  else if (enoughLength && containsLetter && containsNumbers && !containsSpecial) {
    return "Your password is strong";
  }


  // if the password isn't long enough, contains a letter, doesn't contain a number, and doesn't contain a special character,
  // return that the password is weak
  else if (!enoughLength && containsLetter && !containsNumbers && !containsSpecial) {
    return "Your password is weak";
  }


  // if the password isn't long enough, contains a number, doesn't contain a letter, and doesn't contain a special character,
  // return that the password is very weak
  else if (!enoughLength && !containsLetter && containsNumbers && !containsSpecial) {
    return "Your password is very weak";
  }


  // otherwise, return that the password is average
  else {
    return "Your password is average";
  }




  // ----- End of your code area -----
}

// document.ready shorthand
$(function () {

  // click listener on the submit button
  $(document).on("click", "#password-button", function (event) {
    // This prevents the submit button from refreshing the page
    event.preventDefault();

    // Check the strength of the password and store the return value inside a variable
    var passwordStrength = checkStrength($("#password-input").val());

    // Clear the password input field after we have grabbed the value already
    $("#password-input").val("");

    // Display the result of the password check in our password strength div
    $("#password-strength").text(passwordStrength);

  })
})