let weather = {
    apiKey: "0f579d5dd26b99095d8f2ef554a9b61e" ,   //api acquired from openweathermap.org
    fetchWeather: function(city){  //function inputs the city into the api
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" + city + 
            "&units=imperial&appid=" + this.apiKey
            )
        .then((response) => response.json()) //returns the data and converts to an json object
        .then((data) => this.displayWeather(data)); //runs the data through the displayWeather function
    },
    displayWeather: function(data) {
        const { name } = data;
        const { country } = data.sys;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
            //setting variables based off the values in the json object
        document.querySelector(".city").innerText = "Weather in " + name + " " + country;
        document.querySelector(".temp").innerText = Math.floor(temp) + " °F";
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/"+ icon + ".png"
        document.querySelector(".description").innerText = description;
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind Speed: " + speed + " mph";
            //converting the html into the acquired values from the api

        document.getElementById('left').style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name + "')"
            //sets the background from unsplash as the city name which generates images from that location
         minCompare = document.getElementById('height');
        minCompare.classList.add('min-height');
    },
    search: function() {
        this.fetchWeather(document.querySelector(".search-bar").value);
    } // grabs the value placed in the search bar and searches the api for it
}

weather.fetchWeather("San Francisco"); // defaults page to SF

document.querySelector(".search button").addEventListener("click", function () {
    weather.search();
}); // initiates the search function when the search button is clicked
document.querySelector(".search").addEventListener('keyup', (e) => {
    if(e.keyCode === 13){
        weather.search();
    }
}); // initiates the search function whenever the enter button is pressed

document.querySelector(".compare-btn").addEventListener("click", function(){
    var compareBtn = document.getElementById('compare-remove');
    var displayRight = document.getElementById('right');
    compareBtn.classList.add('hidden');
    displayRight.style.display = "flex";
    weatherCompare.fetchWeatherCompare("New York");
}) // query selector for compare button

document.querySelector(".remove-btn").addEventListener('click', function(){
    var hideRight = document.getElementById('right');
    var compareBtn = document.getElementById('compare-remove');
    hideRight.style.display = 'none';
    compareBtn.classList.remove('hidden');
})
// adds feature to remove comparison city

let weatherCompare = { //same as the weather object above just different classes are changed from the json data
    apiKey: "0f579d5dd26b99095d8f2ef554a9b61e" ,   
    fetchWeatherCompare: function(city){
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" + city + 
            "&units=imperial&appid=" + this.apiKey
            )
        .then((response) => response.json()) 
        .then((data) => this.displayWeatherCompare(data)); 
    },
    displayWeatherCompare: function(data) {
        const { name } = data;
        const { country } = data.sys;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        document.querySelector(".city-c").innerText = "Weather in " + name + " " + country;
        document.querySelector(".temp-c").innerText = Math.floor(temp) + " °F";
        document.querySelector(".icon-c").src = "https://openweathermap.org/img/wn/"+ icon + ".png"
        document.querySelector(".description-c").innerText = description;
        document.querySelector(".humidity-c").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind-c").innerText = "Wind Speed: " + speed + " mph";
        document.getElementById('right').style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name + "')";
        var minCompare = document.getElementById('compare');
        minCompare.classList.add('min-height');
    },
    searchCompare: function() {
        this.fetchWeatherCompare(document.querySelector(".search-bar-c").value);
    }
}
document.querySelector(".search-c button").addEventListener("click", function () {
    weatherCompare.searchCompare();
});
document.querySelector(".search-c").addEventListener('keyup', (e) => {
    if(e.keyCode === 13){
        weatherCompare.searchCompare();
    }
});