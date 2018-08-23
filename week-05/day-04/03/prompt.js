var fs = require('fs');
var string = process.argv.slice(2).join(" ");
var array = string.split(' said ');
console.log(array);
if (array.length === 2) {

    var quote = '"' + array[1] + '"' + "-" + array[0] + "; ";
    console.log(array);
    console.log(quote);
    fs.appendFile('quotes.txt', quote, function(err) {
        if (err) {
            console.log(err);
        }
        else { 
            console.log("Quote added");
        }
    })
}