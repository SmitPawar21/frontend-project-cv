const apikey = "93a959d95f7db4d334110a6179a96e36";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";

async function checkWeather(city){
    const response = await fetch(apiUrl + `&q=${city}` + `&appid=${apikey}`);
    var data = await response.json();
    
    if(response.status === 404){
        document.querySelector(".errorbox").style.display = "flex";
        document.querySelector(".weather").style.display = "none";
    }
    else{
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
        document.querySelector(".windspeed").innerHTML = data.wind.speed + " Km/h";
        const weatherImage = document.querySelector(".weather-image");
        const weatherName = document.querySelector(".weather-name");

        if(data.weather[0].main === "Clouds")
        {
            weatherImage.src = "images/clouds.svg";
            weatherName.innerHTML = "cloudy";
        }
        else if(data.weather[0].main === "Clear")
        {
            weatherImage.src = "images/clear.svg";
            weatherName.innerHTML = "clear";
        }
        else if(data.weather[0].main === "Rain")
        {
            weatherImage.src = "images/rain.svg";
            weatherName.innerHTML = "rain";
        }
        else if(data.weather[0].main === "Drizzle")
        {
            weatherImage.src = "images/drizzle.svg";
            weatherName.innerHTML = "drizzle";
        }
        else if(data.weather[0].main === "Haze")
        {
            weatherImage.src = "images/haze.svg";
            weatherName.innerHTML = "haze";
        }
        else if(data.weather[0].main === "Mist")
        {
            weatherImage.src = "images/mist.svg";
            weatherName.innerHTML = "mist";
        }
    
        console.log(data.weather[0].main)
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".errorbox").style.display = "none";
    }

}

let inputbox = document.querySelector(".input-box");
let searchbtn = document.querySelector(".btn");

searchbtn.addEventListener('click',()=>{
    checkWeather(inputbox.value);
});
inputbox.addEventListener('keydown', (e)=>{
    if(e.keyCode === 13)
        {
            checkWeather(inputbox.value);
        }
})

