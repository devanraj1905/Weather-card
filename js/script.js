const apiKey = "55a2e7d2535e6bf16a57ae397d87d1eb";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
var searchBox=document.querySelector(".search-box");
var searchBtn=document.querySelector(".search-btn");
var weatherIcon=document.querySelector(".weather-img")
async function checkWeather(city) {
    const response = await fetch(apiUrl +city+ "&appid=" +apiKey);

    var data = await response.json();
    console.log(data)
    document.querySelector(".location").innerHTML=data.name+", "+data.sys.country;
    document.querySelector(".degree").innerHTML=Math.round(data.main.temp)+ "°C";
    document.querySelector(".humidity-cal").innerHTML=data.main.humidity+"%";
    document.querySelector(".wind-lvl").innerHTML=data.wind.speed+"km/h";

    if(data.weather[0].main=="Clouds"){
        weatherIcon.src="img/Weather-PNG-HD-Image.webp"
    }
    else if(data.weather[0].main=="Clear"){
        weatherIcon.src="img/sun.webp"
    }
    else if(data.weather[0].main=="Rain"){
        weatherIcon.src="img/rain.webp"
    }
    else if(data.weather[0].main=="Drizzle"){
        weatherIcon.src="img/sunwithcloudandrain.webp"
    }
    else if(data.weather[0].main=="Snow"){
        weatherIcon.src="img/snow.webp"
    }
}

searchBtn.addEventListener('click',()=>{
    checkWeather(searchBox.value)
})