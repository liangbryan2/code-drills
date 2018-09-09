// Rate a restaurant server


// Link express, body-parser, and path
// -------------------- Your Code Here --------------------
var express = require('express');
var bodyParser = require("body-parser");
var path = require("path");

// --------------------- End Code Area --------------------



// Initialize express and set our port to 3002
// -------------------- Your Code Here --------------------
var PORT = process.env.PORT || 3002
var app = express();



// --------------------- End Code Area --------------------



// Make our app use bodyparser to access our requests
// -------------------- Your Code Here --------------------
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// --------------------- End Code Area --------------------



//Serve up static assets from public
// -------------------- Your Code Here --------------------
app.use(express.static("public"));



// --------------------- End Code Area --------------------



//======================== HTML ========================

// Serve up the index.html and add.html pages
// -------------------- Your Code Here --------------------
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "/public/index.html"));
})

app.get("/add", function (req, res) {
    res.sendFile(path.join(__dirname, "/public/add.html"))
})




// --------------------- End Code Area --------------------

// ===================================================


// Set up a listener on the designated port for our app
// -------------------- Your Code Here --------------------
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
})



// --------------------- End Code Area --------------------

