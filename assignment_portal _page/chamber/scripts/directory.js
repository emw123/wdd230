const requestURL = 'https://emw123.github.io/wdd230/assignment_portal%20_page/chamber/scripts/data.json';

function sizeFunction(screenSize){
if (screenSize.matches) {
fetch(requestURL)
 .then(function (response) {
   return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
    const businesses = jsonObject['businesses'];
    businesses.forEach(displayTable);
  });

   function displayTable(business) {
   let list_row = document.createElement('tr');
   let td_name = document.createElement('td');
   td_name.textContent = business.name;
   let td_url = document.createElement('td');
   td_url.textContent = business.url;
   let td_address = document.createElement('td');
   td_address.textContent = business.address;
   let td_phone = document.createElement('td');
   td_phone.textContent = business.phone;

    list_row.appendChild(td_name);
    list_row.appendChild(td_url);
    list_row.appendChild(td_address);
    list_row.appendChild(td_phone);
   document.querySelector('table').appendChild(list_row);
  }
} 

else {
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
    const businesses = jsonObject['businesses'];
    businesses.forEach(displayBusinesses);
  });

  function displayBusinesses(business) {
    let card = document.createElement('section');
    let img = document.createElement('img');
    img.setAttribute('src', business.logo, alt = "business logo");
    let h1 = document.createElement('h1'); 
    h1.textContent = business.name;
    let h2 = document.createElement('h2');
    h2.textContent = business.url;
    let h22 = document.createElement('h22');
    h22.textContent = business.address;
    let h23 = document.createElement('h23');
    h23.textContent = business.phone;
    card.appendChild(img);
    card.appendChild(h1);
    card.appendChild(h2);
    card.appendChild(h22);
    card.appendChild(h23);
    document.querySelector('div.cards').appendChild(card);
  }
}
}

var screenSize = window.matchMedia("(max-width: 900px)");
sizeFunction(screenSize);