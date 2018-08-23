// ======== You are given NOTHING to start with 😱 ========
var fs = require('fs');
var person = process.argv.slice(2).join(" ").toLowerCase();
var quotes = [];
fs.readFile('quotes.txt', 'utf8', function (error, data) {
    if (error) {
        // return console.log(error);
    } else if (!person) {
        console.log("Please enter a name");
        return;
    }
    quotes = data.split('; ');
    // console.log(quotes);
    for (var i = 0; i < quotes.length; i++) {
        // console.log(quotes[i].split('-'));
        if (quotes[i].split('-')[1].toLowerCase() === person) {
            // console.log(quotes[i].split('-')[1].toLowerCase())
            // console.log(person)
            console.log(quotes[i].split('-')[0]);
            return;
        } else if (i === quotes.length - 1) {
            // console.log(quotes[i].split('-')[1].toLowerCase())
            // console.log(person)
            console.log("That person never said anything");
        }
    }
})