// 1. Configure Server

//Expected Output: 
// {
//   jerome: 50,
//   code: 80,
//   org: 58,
//   ricky: 30,
//   com: 90,
//   robert: 60,
//   chicken: 68,
//   sasha: 8
// }
var express = require('express');
var app = express();
var PORT = 8080;
var input = ["50 jerome.code.org", "30 ricky.code.com", "60 robert.chicken.com", "8 sasha.chicken.org"]

function getNumVisits(arr) {
  // 2. ================= YOUR WORK HERE ==================
  var numbers = [];
  var strings = [];
  var object = {};
  for (var i = 0; i < arr.length; i++) {
    numbers.push(arr[i].split(" ")[0]);
    strings.push(arr[i].split(" ")[1]);
  }
  // console.log(numbers);
  // console.log(strings);
  for (var i = 0; i < strings.length; i++) {
    var words = strings[i].split(".");
    // console.log(words);
    for (var j = 0; j < words.length; j++) {
      object[words[j]] = 0;
    }
  }
  for (var i = 0; i < strings.length; i++) {
    var words = strings[i].split(".");
    // console.log(words);
    for (var j = 0; j < words.length; j++) {
      object[words[j]] += parseInt(numbers[i]);
    }
  }
  // console.log(object);
  return object;

  // ===================================================
}
getNumVisits(input);
// console.log(object);

// At the root route, send the solution as JSON
//3. ================= YOUR WORK HERE ==================
app.get("/", function (req, res) {
  var object = getNumVisits(input);
  return res.json(object);

})






// ===================================================


// Listener
// ===========================================================
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});
// 1. Create server