// JavaScript source code

$(document).ready(function () {
    $("#form").submit(function (event) {
        performSearch(event);
    })

    $("input").focus(function () {
        $(this).css("background-color", "#e6f7ff");
        $(this).css("color", "#006699");
    });

    

    
})


function performSearch(event) {
    event.preventDefault();
    let request;


     request = $.ajax({
        url: 'https://api.openweathermap.org/data/2.5/weather',
        type: "GET",
        data:{
            q: $("#city").val(),
            appid: '117fc9dc1561d82e54c1ef65a336fb05',
            units:'metric'
        }
        
    })

    request.done(function (response) {
        formatSearch(response);
    })
}

function formatSearch(jsonObj) {
    let cityName = jsonObj.name;
    let cityWeather = jsonObj.weather[0].main;
    let cityTemp = jsonObj.main.temp;
    let cityHumidity = jsonObj.main.humidity;

    $("#city-name").text(cityName);
    $("#city-weather").text(cityWeather);
    $("#city-temp").text(cityTemp + " Celsius");
    $("#city-humidity").text(cityHumidity+"% Humidity");

}