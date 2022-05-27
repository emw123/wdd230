const temp = 33
const windspeed = 2.5
let windchill = 35.74 + 0.6215 * temp - 35.75 * Math.pow(windspeed, 0.16) + 0.4275 * temp * Math.pow(windspeed, 0.16);

document.getElementById("windchill").innerHTML = windchill.toFixed(1);