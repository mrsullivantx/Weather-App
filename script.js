const inpKey = $("#inpKey");
const inpBtn = $("#inpBtn");
const outputEl = $("#output");
const outList = $("#outputList");
const clearBtn = $("#clearBtn");
const iconEl = $("#icon");
const weatherEl = $("#weather");
const tempEl = $("#temp");

$("#inpBtn").on("click", function(event) {
    event.preventDefault();

    if ($('#inpKey').val().trim() === "") {
        alert("PLEASE ENTER SOMETHING FIRST!!!");
        return;
    }

    const baseURL = 'https://api.openweathermap.org/data/2.5/weather?'
        //const searchVal = 'austin'
    const searchVal = $(inpKey).val()
    const finalSearchVal = 'q=' + searchVal
    const API_KEY = '&units=imperial&appid=1af971d57fcf1d7beac900922bc56fa7'
    const queryURL = baseURL + finalSearchVal + API_KEY

    $.ajax({
        url: queryURL
    }).then(response => {
        console.log('RESPONSE--->', response)
    })

    $.getJSON(queryURL, function(data) {
        console.log(data);

        var icon = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
        var temp = data.main.temp;
        var weather = data.weather[0].main;


        $(iconEl).attr("src", icon);
        $(weatherEl).append(weather);
        $(tempEl).append(temp);
    });
});