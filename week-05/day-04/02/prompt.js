// ======== You are given NOTHING to start with 😱 ========
var fs = require('fs');
var person = process.argv.slice(2).join(" ").toLowerCase();
var quotes = [];
fs.readFile('quotes.txt', 'utf8', function(error, data) {
    if (error) {
        return console.log(error);
    }
    quotes = data.split('; ');
    // console.log(quotes);
    for (var i = 0; i < quotes.length; i++) {
        // console.log(quotes[i].toLowerCase().includes(person));
        if (quotes[i].toLowerCase().includes(person)) {
            console.log(quotes[i].slice(0, -person.length - 1));
            return;
        }
    }
})

