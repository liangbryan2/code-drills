var express = require('express');
var app = express();
var PORT = 8080;


function evenLetters(word) {
    var object = {}
    var alphabet = 'abcdefghijklmnopqrstuvwxyz';
    var arr = alphabet.split('');
    for (var i = 0; i < arr.length; i++) {
        object[arr[i]] = 0;
    }
    for (var i = 0; i < word.length; i++) {
        object[word[i]] += 1;
    }
    var letters = "";
    for (var key in object) {
        if (object[key] % 2 === 0) {
            letters += key;
        }
    }
    return letters;
}


app.get("/:word", function (req, res) {
    var word = req.params.word;
    var letters = evenLetters(word);
    return res.send(letters);
  
  })




app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });