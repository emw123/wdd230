//const temp = 33
//const windspeed = 2.5
//let windchill = 35.74 + 0.6215 * temp - 35.75 * Math.pow(windspeed, 0.16) + 0.4275 * temp * Math.pow(windspeed, 0.16);

//document.getElementById("windchill").innerHTML = windchill.toFixed(1);

let apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5807575&appid=38777021ff4e6e4bb55b5ca6ec4914c5";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    let K = jsObject.main.temp
    let F = ((K - 273.15)* 1.8000 + 32.00);
    document.querySelector('#current-temp').textContent = Math.round(F);
    let weatherReport = jsObject.weather[0].description
    document.querySelector('#weather-report').textContent = weatherReport
    const iconsrc= `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
    const desc = jsObject.weather[0].description;
    document.querySelector('#icon-src').textContent = iconsrc;
    document.querySelector('#weathericon').setAttribute('src', iconsrc);
    document.querySelector('#weathericon').setAttribute('alt', desc);
    let windspeed = jsObject.wind.speed;
    document.querySelector('#windspeed').textContent = jsObject.wind.speed;
    let windchill = 35.74 + 0.6215 * F - 35.75 * Math.pow(windspeed, 0.16) + 0.4275 * F * Math.pow(windspeed, 0.16);
    document.getElementById("windchill").innerHTML = windchill.toFixed(1);})