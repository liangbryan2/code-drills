// declare the variable we're storing the confirm dialogue in
var confirmVar;
// create a key press listener


document.onkeyup = function(event) {

  // store the key the user pressed into a variable so we can 
  // refer to it easier in this function and
  // change it to lower case to make our logic not case sensitive
  key = event.key.toLowerCase();

  // console log the key that the user pressed
  console.log(key);

  // check whether the user pressed the "h" key
  if (key === "h") {
    // create a confirm dialogue when they do and store the response from that
    // dialogue into the variable we declared outside the event listener
    confirmVar = confirm("Okay for true, cancel for false.");
  }


  // check whether the user pressed the "k" key
    // check whether the user had answered true to the previous confirm dialogue
    // display the corresponding alert dialogue
  if (key === "k" && confirmVar === true) {
    alert("Hello");
  }
  if (key === "k" && confirmVar === false) {
    alert("No Thanks");
  }
}