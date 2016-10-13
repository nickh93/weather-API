var apiKey = require('./../.env').apiKey;

Weather = function(){

}

Weather.prototype.getWeather = function(city, displayFunction)
{
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response) {
        displayFunction(city, response.main.humidity, response.main.sea_level, response.sys.country);
    }).fail(function(error) {
        $('.showWeather').text(error.responseJSON.message);
    });
}

exports.weatherModule = Weather;
