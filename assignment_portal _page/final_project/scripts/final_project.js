function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
}

const x = document.getElementById('hamburgerButton');
x.onclick = toggleMenu;
let apiURL = "https://api.openweathermap.org/data/2.5/weather?id=4348599&appid=38777021ff4e6e4bb55b5ca6ec4914c5";

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

const requestURL = 'https://emw123.github.io/wdd230/assignment_portal%20_page/final_project/json/temple_page.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
    const businesses = jsonObject['temples'];
    businesses.forEach(displayBusinesses);
  });

  function displayBusinesses(temple) {
    let card = document.createElement('section');
    let img = document.createElement('img');
    img.setAttribute('src', temple.img, alt = "temple image");
    let h2 = document.createElement('h2'); 
    h2.textContent = temple.name;
    let p = document.createElement('p');
    p.textContent = temple.address;
    let p2 = document.createElement('p');
    p2.textContent = temple.phone;
    let p3 = document.createElement('p');
    p3.textContent = temple.services;
    let p4 = document.createElement('p');
    p4.textContent = temple.clousures;
    let p5 = document.createElement('p');
    p5.textContent = temple.history;
    card.appendChild(img);
    card.appendChild(h2);
    card.appendChild(p);
    card.appendChild(p2);
    card.appendChild(p3);
    card.appendChild(p4);
    card.appendChild(p5);
    document.querySelector('div.temple_cards').appendChild(card);
  }


let date = new Date();
let year = date.getFullYear();
document.querySelector('#year').textContent = year;

let currentdate = document.lastModified;
document.querySelector('#lastDate').textContent = currentdate;
console.log(document.lastModified);



const now = new Date();
const datefield = document.querySelector("#headerdate");
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(now);
datefield.innerHTML = `<em>${fulldate}</em>`;

function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
}

const openmenu = document.getElementById('hamburgerButton');
openmenu.onclick = toggleMenu;

