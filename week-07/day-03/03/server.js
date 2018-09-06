// 1. Configure Server

//Expected Output: 
// "ethae uickqae ownbrae ogdae umpedjae overwae ethae azylae oxfae applewae"
var input = "the quick brown dog jumped over the lazy fox apple"
var express = require('express');
var app = express();
var PORT = 8080;

function pigLatin(sen) {
  // 2. ================= YOUR WORK HERE ==================
  var vowels = /[aeiou]/i;
  var wordsArr = sen.split(' ');
  // console.log(wordsArr);
  var newSen = [];
  for (var i = 0; i < wordsArr.length; i++) {
    // console.log(wordsArr[i])
    var newWord = "";
    var index = wordsArr[i].search(vowels);
    if (index === 0) {
      newWord = wordsArr[i] + "wae";
    } else {
      // console.log(index);
      // console.log(wordsArr[i].slice(index))
      newWord = wordsArr[i].slice(index) + wordsArr[i].slice(0, index) + "ae";
    }
    // console.log(newWord);
    newSen.push(newWord);
  }

return newSen.join(' ');


  // ===================================================
}

pigLatin(input);
// At the root route, send the solution as JSON
//3. ================= YOUR WORK HERE ==================
app.get("/", function (req, res) {
  var sen = pigLatin(input);
  return res.send(sen);

})







// ===================================================


// Listener
// ===========================================================

// 1. Create server
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});