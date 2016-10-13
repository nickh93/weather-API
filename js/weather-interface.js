var Weather = require("./../js/weather.js").weatherModule;

var displayCityData = function(city, humidityData, seaLevelData, countryCodeData)
{
    $(".showWeather").text(city + " has a humidity of " + humidityData + "%, and a sea level of " + seaLevelData + " this city's country code is " + countryCodeData);
}

$(document).ready(function() {
    var currentWeatherObject = new Weather();
    $("#weatherLocation").click(function() {
        var city = $("#location").val();
        $("#location").val("");
        currentWeatherObject.getWeather(city, displayCityData);
    });
});
