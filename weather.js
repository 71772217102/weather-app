//https://api.openweathermap.org/data/2.5/weather?q=chennai&appid=ac11fbef292e3a25871a3263f9600527&units=metric

const apiKey = "ac11fbef292e3a25871a3263f9600527";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const inputbox = document.querySelector(".search-input");
const btn = document.querySelector(".search-btn");

const image = document.querySelector(".weather-image");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status == 404)
    {
        alert("Invalid City Name");
    }
    var data = await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    if (data.weather[0].main == "Clouds") {
        image.src = "file:///D:/Frontend/images/clouds.png";
        
    }

    else if (data.weather[0].main == "Clear") {
        image.src = "file:///D:/Frontend/images/clear.png";

    }

    else if (data.weather[0].main == "Rain") {
        image.src = "file:///D:/Frontend/images/rain.jpg";
    }

    else if (data.weather[0].main == "Drizzle") {
        image.src = "file:///D:/Frontend/images/drizzle.jpg";
    }

    else if (data.weather[0].main == "Mist") {
        image.src = "file:///D:/Frontend/images/mist.png";
    }
    else if (data.weather[0].main == "Haze") {
        image.src = "file:///D:/Frontend/images/haze.png";
    }
}

btn.addEventListener("click", () => {

    checkWeather(inputbox.value);
})

