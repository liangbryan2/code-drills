var inquirer = require('inquirer');
var request = require('request');
// console.log(city);
var weather;

inquirer.prompt([{
    type: 'input',
    message: 'What city would you like to see the weather for?',
    name: 'city'
}]).then(function (response) {
    var city = response.city.replace(/ /g, '+');
    request("https://api.openweathermap.org/data/2.5/weather?q=" + city + ",us&appid=25e8403f652e1ad0f84b5a71000a1c9f&units=imperial", function (error, response, body) {
        console.log('error:', error);
        console.log('statusCode:', response && response.statusCode);
        weather = JSON.parse(body);
        console.log("City: ", weather.name);
        console.log("Country: ", weather.sys.country);
        console.log('Weather condition: ', weather.weather[0].main);
    });
})