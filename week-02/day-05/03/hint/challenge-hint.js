// Day 05
// Activity 03

// The README.md has instructions for this exercise


// This function should populate our page with the 4 buttons we need
// We will be defining this function right now and invoking it later
function populateButtons() {
  // Your code goes here


  // create the "Hello" button
  var helloButton = $("<button>");
  helloButton.text("Hello");
  // assign "Hello" to its data attribute
  helloButton.attr("data", "Hello");


  // create the "World" button
  var worldButton = $("<button>");
  worldButton.text("World");
  // assign "World" to its data attribute
  worldButton.attr("data", "World");
  

  // create the "Reset" button
  var resetButton = $("<button>");
  resetButton.text("Reset");
  // assign "Reset" to its data attribute
  resetButton.attr("data", "Reset");
  

  // create the "User" button
  var userButton = $("<button>");
  userButton.text("User");
  // add an ide to the "User" button so we can refer to it later
  userButton.attr("id", "user-button");

  // instantiate the initial data attribute to be an empty string
  userButton.attr("data", "");
  

  // add the "Hello", "World", and "Reset" buttons to the "buttons-area"
  $("#buttons-area").append(helloButton, worldButton, resetButton);

  // add the "User" button to the "user-button-area"
  $("#user-button-area").append(userButton);

  
  // End of your code area
}


// This is jQuery shorthand to a document.ready
// This tells our javascript to wait until the page has finished 
// loading before running the code.
$(function () {

  // call on the populateButtons functions we define below.
  populateButtons();

  // This is the key press listener that saves the key the user pressed.
  // Refer to step 4 on the README
  document.onkeyup = function(event) {
    // Your code goes here



    // pull the previous key presses out of the "User" button
    var previousKeys = $("#user-button").attr("data");

    // concatenate the key to the end of the previous key presses
    previousKeys = previousKeys + event.key;

    // store the new key press history back into the "User" button
    $("#user-button").attr("data", previousKeys);


    // End of your code area
  }

  // One click listener for all our buttons. You're going to have to figure out
  // which button was clicked and handle the logic for that button inside here
  // Refer to step 3 on the README
  $(document).on("click", "button", function (event) {
    // Your code goes here
    // console.log($(this).attr("data"));

    // if the data of the button is "Hello" or "World", we append the data
    // to the output area
    if($(this).attr("data") === "Hello" || $(this).attr("data") === "World") {
      $("#output").append($(this).attr("data"));
    }

    // if the data of the button is "Reset", we clear the output area
    else if($(this).attr("data") === "Reset") {
      $("#output").empty();
    }

    // otherwise, it's the "User" button, so we set the output area's content
    // to be the data of the button and then clear the data stored within the
    // "User button"
    else {
      $("#output").text($(this).attr("data"));
      $(this).attr("data", "");
    }


    // End of your code area
  })
})
