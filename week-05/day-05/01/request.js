var request = require('request');
var zipcode = process.argv.slice(2).join("");
console.log(zipcode);
request("https://api.openweathermap.org/data/2.5/forecast?zip=" + zipcode + ",us&appid=25e8403f652e1ad0f84b5a71000a1c9f&units=imperial", function (error, response, body) {
    // console.log('error:' , error);
    // console.log('statusCode:', response && response.statusCode);
    // console.log('body:', JSON.parse(body));
    for (var i = 0; i < 5; i++) {
        console.log(JSON.parse(body).list[i].dt_txt + " " + JSON.parse(body).list[i].main.temp);
    }
});

// no need to console log 38 items. JSON.parse(body).list.length