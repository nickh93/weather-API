var apiKey = require('./../.env').apiKey;

$(document).ready(function() {
    $("#weatherLocation").click(function() {
        var city = $("#location").val();
        $("#location").val("");
        $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response)
        {
            $(".showWeather").text(city + " has a humidity of " + response.main.humidity + "%, and a sea level of " + response.main.sea_level + " this city's country code is " + response.sys.country);
        }).fail(function(error) {
            $('.showWeather').text(error.responseJSON.message);
        });
    });
});
