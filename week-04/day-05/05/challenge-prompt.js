// Activity 5


// In this activity, we're creating a function that counts the
// number of consonants in a string


// -------------------------------------------------------
//                       Count Consonants
// -------------------------------------------------------
function countCons(str) {
  // -------------------- Your Code Here --------------------
  var counter = 0;
  var vowels = 'aeiou';
  var string = str.toLowerCase().split("");
  for (var i = 0; i < string.length; i++) {
    if (vowels.includes(string[i])) {
      continue;
    }
    else {
      counter++;
    }
  }
  return counter;


  // --------------------- End Code Area --------------------
}


// This listens for and calls on the `countCons` function with the user input
$(function() {
  $(document).on("click", "button[type=submit]", function(event){
    event.preventDefault();
    
    num = $("input").val().trim();
    $("#output-area").text(countCons(num));

  });
})