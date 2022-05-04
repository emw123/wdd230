let date = new Date();
let year = date.getFullYear();
document.querySelector('#year').textContent = year;

let currentdate = document.lastModified;
document.querySelector('#lastDate').textContent = currentdate;
console.log(document.lastModified);