// Reverse Words


// Write a function `reverseWords` that takes in a sentence as a string and
// reverses the words within the sentence. Each word within the sentence is
// seperated by a space and you can assume there will not be more than one
// space between words.
function reverseWords(str){
  // -------------------- Your Code Here --------------------
  var words = str.split(" ");
  var reversed = [];
  var string = "";
  for (var i = 0; i < words.length; i++) {
    var letters = words[i].split("");
    reversed = letters.reverse();
    var word = reversed.join("") + " ";
    // console.log(word);
    string += word;
  }

  return string.trim();

  // -------------------- End Code Area ---------------------
}

module.exports = reverseWords;