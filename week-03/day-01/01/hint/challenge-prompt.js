// Day 01
// Activity 01


// wait for the DOM to finish loading (document.ready)
$(document).ready(function () {

  // Create a click listener for the submit button
  $("#submit").on("click", function (e) {

    // stop the default behavior of the submit button

    e.preventDefault();


    // pull the values off the user input form and store them in seperate variables
    var firstName = $("#formFN").val();
    var lastName = $("#formLN").val();
    var occupation = $("#occupation").val();
    var city = $("#city").val();
    var state = $("#state").val();

    // clear the form after we're done storing the values
    $("#form").trigger("reset");


    // generate the divs needed to display the user data and put the values 
    // we stored from the form inside the divs
    var div1 = $("<div>").html("<h2>" + firstName + " " + lastName + "</h2>");
    var div2 = $("<div>").html("<h2>" + occupation + "</h2>");
    var div3 = $("<div>").html("<h2>" + city + ", " + state + "</h2>");

    // empty the display area and display the divs we just created in the display area
    $("#display").empty();
    $("#display").append(div1, div2, div3);
  });
});