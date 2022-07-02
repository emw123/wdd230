
let date = new Date();
let year = date.getFullYear();
document.querySelector('#year').textContent = year;

let currentdate = document.lastModified;
document.querySelector('#lastDate').textContent = currentdate;
console.log(document.lastModified);

//let day = date.getDay();
//const bannerMessage = document.querySelector('#banner');
//if (day == 1) || (day == 2);
    //bannerMessage.textContent = "🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m";

const now = new Date();
const datefield = document.querySelector("#headerdate");
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(now);
datefield.innerHTML = `<em>${fulldate}</em>`;

function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
}

const x = document.getElementById('hamburgerButton');
x.onclick = toggleMenu;

