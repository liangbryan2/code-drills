// Activity 1


// In this activity, we're creating a function that sings the
// "99 Bottles of Beer on the Wall song"

// -------------------------------------------------------
//                Helper Functions (Optional)
//
// -------------------- Your Code Here --------------------
function line(num) {
  if (num === 1) {
    $("#output-area").append("<p>" + num + " bottle of beer on the wall, " + num + " bottle of beer.</p>");
    $("#output-area").append("<p>Take one down, pass it around, no more bottles of beer on the wall!</p>")
  } else {
    $("#output-area").append("<p>" + num + " bottles of beer on the wall, " + num + " bottles of beer.</p>");
    $("#output-area").append("<p>Take one down, pass it around, " + (num-1) + " bottles of beer on the wall!</p>")
  }
}




// --------------------- End Code Area --------------------


// -------------------------------------------------------
//                  Singing 99-Bottles Function
// -------------------------------------------------------
function sing(maxBottles) {
  // -------------------- Your Code Here --------------------
  for (var i = maxBottles; i > 0; i--) {
    line(i);
  }




  // --------------------- End Code Area --------------------
}


// This sets up a listener that calls on the `sing` function with the user input
$(function () {
  $(document).on("click", "button[type=submit]", function (event) {
    event.preventDefault();

    num = $("input").val().trim();
    $("#output-area").empty();
    sing(num);

  });
})